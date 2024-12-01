const express = require('express')
const route= express.Router()
const { Sequelize, Op } = require('sequelize')
const db= require('../models/index')
const { where } = require('sequelize')
const { sequelize, dossier, client, dossier_rdv, Dossier_cliniques, hopital, ville, users } = require('../models'); // Assurez-vous que le chemin est correct
const { dateToDbFormat } = require('../helpers/dateHelper');
const bodyParser = require('body-parser')
const DossierDTO = require('../dtos/dossierDto')
const { QueryTypes } = require('sequelize'); // Import QueryTypes
//const hopital_hotelsController = require("../controlles/hopital_hotelsController")




route.get('/dossiers', async (req, res, next) => {
    // Définir user_type
    const user_type = 'hopital';
    try {
        let { tableau, light_form, datedeb, dateto, dossierStatus, paiementStatus, partner, hopital_id, country, protocol_id, 
              online_consultation, cons_paid, source_rs, demande_user, treatments, appointment, patientName, patientEmail, 
              patientPhone, langue } = req.body;

        let filterCdt = '';
        let filterHAVING = '';

        // Gestion des filtres basiques
        if (light_form) {
            filterCdt += " AND dossier_extrainfos LIKE '%Ligh%'";
        }

        if (datedeb) {
            filterCdt += ` AND dc.dispatch_datetime >= '${dateToDbFormat(datedeb)}'`;
        }

        if (dateto) {
            filterCdt += ` AND dc.dispatch_datetime <= '${dateToDbFormat(dateto)} 23:59:59'`;
        }

        if (dossierStatus && Array.isArray(dossierStatus) && dossierStatus.length > 0) {
            dossierStatus = dossierStatus.map(status => parseInt(status));
            if (dossierStatus.includes(5)) {
                filterCdt += " AND dc.substatus = 2";
                filterHAVING += " HAVING MAX(dc.status_hopital) = 0";
            } else if (dossierStatus.includes(2)) {
                filterCdt += " AND dc.substatus <= 2";
                filterHAVING += " HAVING MAX(dc.status_hopital) = 2";
            } else if (dossierStatus.includes(-1)) {
                filterCdt += " AND dc.status_hopital = -1";
                filterHAVING += " HAVING MIN(dc.status_hopital) = -1";
            } else if (dossierStatus.includes(0)) {
                filterCdt += " AND dc.status_hopital = 0 AND dc.substatus <> 2 AND dc.status_hopital <> -1 AND dossier_status <> -1 AND dossier_status <> 4";
                filterHAVING += " HAVING MAX(dc.status_hopital) = 0 AND MIN(dc.status_hopital) <> -1";
            } else {
                filterCdt += ` AND dc.status_hopital IN (${dossierStatus.join(',')})`;
            }
        }

        if (paiementStatus) {
            filterCdt += ` AND d.dossier_paiement = ${parseInt(paiementStatus)}`;
        }

        if (partner) {
            filterCdt += ` AND d.dossier_partnerid = ${parseInt(partner)}`;
        }

        if (hopital_id) {
            filterCdt += ` AND dc.status = 1 AND dc.hopital_id = ${parseInt(hopital_id)}`;
        }

        if (country) {
            filterCdt += ` AND (SELECT country FROM access_ip WHERE ip_adress = d.dossier_ip) = '${country}'`;
        }

        if (protocol_id) {
            filterCdt += ` AND rdv_protocolid = '${protocol_id}'`;
        }

        if (online_consultation) {
            filterCdt += ` AND rdv_type = 1`;
        }

        if (online_consultation && cons_paid) {
            filterCdt += ` AND rdv_paid = '${cons_paid}'`;
        }

        if (source_rs) {
            filterCdt += ` AND d.traffic_source = 'social'`;
        }

        if (demande_user) {
            filterCdt += ` AND d.dossier_creator = ${parseInt(demande_user)}`;
        }

        if (treatments) {
            filterCdt += ` AND d.dossier_id IN ( 
                SELECT dossier_id FROM dossier_procedures WHERE procedure_id = ${parseInt(treatments)} OR procedure_id IN ( 
                    SELECT procedure_id FROM procedures WHERE procedure_parent_id = ${parseInt(treatments)}
                )
            )`;
        }

        if (appointment) {
            if (datedeb) {
                filterCdt += ` AND d.dossier_datecreation >= '${dateToDbFormat(datedeb)}'`;
            }

            if (dateto) {
                filterCdt += ` AND d.dossier_datecreation <= '${dateToDbFormat(dateto)} 23:59:59'`;
            }
        }

        if (patientName) {
            filterCdt += ` AND (client_nom LIKE '%${patientName}%' OR client_prenom LIKE '%${patientName}%')`;
        }

        if (patientEmail) {
            filterCdt += ` AND client_email LIKE '%${patientEmail}%'`;
        }

        if (patientPhone) {
            filterCdt += ` AND client_telephone LIKE '%${patientPhone}%'`;
        }

        if (langue && langue !== 'All') {
            filterCdt += ` AND u.user_lang = '${langue}'`;
        }

        // Construction de la requête SQL
        let sql = `SELECT
                        client_nom, 
                        hopitalmanager_fullname,
                        hopital_name,
                        client_age,
                        client_sexe,                    
                        client_smoker,
                        processed_by,
                        
                        ur.username,
                        d.*, 
                        MIN(dc.dispatch_datetime) AS dispatch_datetime,
                        MAX(dc.status) AS hopitalStatus,
                        (SELECT user_lang FROM users u WHERE u.client_id = client.client_id LIMIT 1) AS user_lang,
                        (SELECT country FROM access_ip WHERE ip_adress = d.dossier_ip) AS country,
                        (SELECT GROUP_CONCAT(procedure_name_en ORDER BY procedure_name_en SEPARATOR '**') FROM procedures p INNER JOIN dossier_procedures dp ON dp.procedure_id = p.procedure_id WHERE dp.dossier_id = d.dossier_id) AS list_procedures
                FROM dossier d
                INNER JOIN client ON client_id = dossier_client
                LEFT JOIN dossier_rdv ON rdv_dossier_id = d.dossier_id
                LEFT JOIN dossier_cliniques dc ON dc.dossier_id = d.dossier_id
                LEFT JOIN hopital h ON h.hopital_id = dc.hopital_id
                LEFT JOIN hopital_managers hm ON hm.hopitalmanager_id = dc.processed_by
                LEFT JOIN ville ON ville_id = dossier_destination
                LEFT JOIN users u ON u.client_id = client.client_id
                LEFT JOIN users ur ON ur.id_user = d.dossier_responsable
                WHERE 1 = 1 ${filterCdt}`;

        sql += ` AND dossier_supprime = '0000-00-00 00:00:00'
                GROUP BY d.dossier_id ${filterHAVING}
                ORDER BY COALESCE(dc.dc_urgent, 0) DESC, ${user_type !== 'hopital' ? 'd.dossier_datecreation' : 'dc.dispatch_datetime'} DESC`;

        // Log de la requête SQL pour debug
        console.log('SQL Query:', sql);

        // Exécution de la requête SQL
        const dossiers = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const dossiersDto = dossiers.map(dossier => new DossierDTO(dossier))
        return res.status(200).json(dossiersDto);
    } catch (error) {
        console.error('Error retrieving dossiers:', error);
        return res.status(500).json({ message: 'Error retrieving dossiers', error: error.message });
    }
});


//get dossier by Id  bien tester 
route.get('/dossiers/:id', async (req, res, next) => {
  try {
    const dossierId = req.params.id;

    // Vérifier que l'ID est un nombre
    if (isNaN(dossierId)) {
      return res.status(400).json({ message: 'Invalid dossier ID' });
    }

    // Construction de la requête SQL
    let sql = `SELECT 
                client_nom, 
                processed_by,
                ur.username,
                d.*, 
                MIN(dc.dispatch_datetime) AS dispatch_datetime,
                MAX(dc.status) AS hopitalStatus,
                (SELECT user_lang FROM users u WHERE u.client_id = client.client_id LIMIT 1) AS user_lang,
                (SELECT country FROM access_ip WHERE ip_adress = d.dossier_ip) AS country,
                (SELECT GROUP_CONCAT(procedure_name_en ORDER BY procedure_name_en SEPARATOR '**') FROM procedures p INNER JOIN dossier_procedures dp ON dp.procedure_id = p.procedure_id WHERE dp.dossier_id = d.dossier_id) AS list_procedures
              FROM dossier d
              INNER JOIN client ON client_id = dossier_client
              LEFT JOIN dossier_rdv ON rdv_dossier_id = d.dossier_id
              LEFT JOIN dossier_cliniques dc ON dc.dossier_id = d.dossier_id
              LEFT JOIN hopital h ON h.hopital_id = dc.hopital_id
              LEFT JOIN ville ON ville_id = dossier_destination
              LEFT JOIN users u ON u.client_id = client.client_id
              LEFT JOIN users ur ON ur.id_user = d.dossier_responsable
              WHERE d.dossier_id = ${parseInt(dossierId)} AND dossier_supprime = '0000-00-00 00:00:00'
              GROUP BY d.dossier_id
              ORDER BY COALESCE(dc.dc_urgent, 0) DESC, dc.dispatch_datetime DESC`;

    // Log de la requête SQL pour debug
    console.log('SQL Query:', sql);

    // Exécution de la requête SQL
    const dossier = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

    if (dossier.length === 0) {
      return res.status(404).json({ message: 'Dossier not found' });
    }

    return res.status(200).json(dossier[0]);
  } catch (error) {
    console.error('Error retrieving dossier:', error);
    return res.status(500).json({ message: 'Error retrieving dossier', error: error.message });
  }
});
/*
// Route pour récupérer le statut du dossier
route.get('/dossier/status/:dossier_id', async (req, res) => {
    const dossierId = req.params.dossier_id;

    try {
        // Recherche du dossier clinique avec l'hôpital correspondant à l'utilisateur créateur
        const dossier = await Dossier_cliniques.findOne({
            where: { dossier_id: dossierId },
            include: [{ model: hopital }]
        });

        if (!dossier) {
            return res.status(404).json({ error: 'Dossier not found' });
        }

        // Requête SQL pour récupérer les informations sur le statut du dossier
        const sql = `
            SELECT max(status_hopital) as others, min(status_hopital) as cancelled, substatus, processed_by
            FROM dossier_cliniques dc
            INNER JOIN hopital h ON h.hopital_id = dc.hopital_id
            WHERE dc.dossier_id = :dossier_id
        `;

        const [results] = await sequelize.query(sql, {
            replacements: { dossier_id: dossierId },
            type: Sequelize.QueryTypes.SELECT
        });

        let statusOfThisFolder = "Awaiting";

        // Logique pour déterminer le statut du dossier
        if (results.cancelled === "-1") {
            statusOfThisFolder = "Cancelled";
        } else if (results.others === "-3") {
            statusOfThisFolder = "Inf. Rqsted";
        } else if (results.others === "-7") {
            statusOfThisFolder = "Not available";
        } else if (results.others === "6") {
            statusOfThisFolder = "Quoted";
        } else if (results.others === "4") {
            statusOfThisFolder = "Confirmed";

            // Vérification du premier rendez-vous confirmé
            const firstRdv = await dossier_rdv.getFirstConfirmedRDV(dossierId, dossier.hopital_id);

            if (firstRdv && firstRdv.rdv_type === '1') {
                res.locals.isOnlineConsultation = true;
            }
        } else if (results.others === "3") {
            statusOfThisFolder = "Answered and relaunched";
        } else if (results.others === "2") {
            statusOfThisFolder = "Answered";
        } else if (results.others === "1" && (user.isAdmin() || user.isSubadmin())) {
            statusOfThisFolder = "Dispatched";
        } else {
            if (results.substatus === "2") {
                statusOfThisFolder = "In Process";
            } else if (results.substatus === "0") {
                statusOfThisFolder = "Not Available";
            } else {
                statusOfThisFolder = "Awaiting";
            }
        }

        // Requête SQL pour compter le nombre de rendez-vous en attente
        const hopitals = await hopital.findAll();
        const hopitalsId = hopitals.map(h => h.hopital_id);

        const sqlCountRdvs = `
            SELECT count(*) as count FROM dossier_rdv 
            WHERE rdv_dossier_id = :dossier_id 
            AND hopital_id IN (:hopitalsId) 
            AND rdv_confirmed = 0
        `;

        const [rdvs] = await sequelize.query(sqlCountRdvs, {
            replacements: { dossier_id: dossierId, hopitalsId },
            type: Sequelize.QueryTypes.SELECT
        });

        const nbRdvs = rdvs.count;

        if (nbRdvs > 0 && req.query.jsNotif) {
            // Code JavaScript pour la notification ici
            res.locals.nbRdvs = nbRdvs;
        }

        // Envoi de la réponse
        res.status(200).json({ statusOfThisFolder, nbRdvs });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});*/
/*
 route.get('/dossier/status/:dossier_id', async (req, res) => {
     let statusOfThisFolder = "Awaiting";
     const dossierId = req.params.dossier_id;
     const hospitalId = req.query.hospital_id;

     try {
       // Fetch dossier status for the specific hospital
       const result = await sequelize.query(
       `SELECT MAX(dc.status_hopital) AS others, MIN(dc.status_hopital) AS cancelled, dc.substatus, dc.processed_by
          FROM dossier_cliniques dc
          WHERE dc.dossier_id = :dossierId AND dc.hopital_id = :hospitalId`,
        {
           replacements: { dossierId, hospitalId },
          type: QueryTypes.SELECT
         }
       );
  
       const row = result[0];
       const status = row.others;
  
       // Set dossier status based on retrieved values
       if (row.cancelled === "-1") {
         statusOfThisFolder = "Cancelled";
       } else if (status === "-3") {
         statusOfThisFolder = "Inf. Rqsted";
       } else if (status === "-7") {
         statusOfThisFolder = "Not available";
       } else if (status === "6") {
         statusOfThisFolder = "Quoted";
       } else if (status === "4") {
         statusOfThisFolder = "Confirmed";
       } else if (status === "3") {
         statusOfThisFolder = "Answered and relaunched";
      } else if (status === "2") {
         statusOfThisFolder = "Answered";
       } else if (status === "1") {
       if (row.substatus === "2") {
          statusOfThisFolder = `In Process by ${row.processed_by}`;
         } else if (row.substatus === "0") {
           statusOfThisFolder = "Not Available";
        }
      }
  
       return { statusOfThisFolder };
     } catch (error) {
       console.error("Error fetching dossier status for hospital:", error);
       return { statusOfThisFolder: "Error" };
     }
});*/


route.get('/dossier/status/:dossier_id', async (req, res) => {
    let statusOfThisFolder = "Awaiting";
    const dossierId = req.params.dossier_id;
    const hospitalId = req.query.hospital_id;

    // Check if hospitalId is provided
    if (!hospitalId) {
        return res.status(400).json({ error: "hospital_id query parameter is required" });
    }

    try {
        // Fetch dossier status for the specific hospital
        const result = await sequelize.query(
            `SELECT MAX(dc.status_hopital) AS others, MIN(dc.status_hopital) AS cancelled, dc.substatus, dc.processed_by
             FROM dossier_cliniques dc
             WHERE dc.dossier_id = :dossierId AND dc.hopital_id = :hospitalId`,
            {
                replacements: { dossierId, hospitalId },
                type: QueryTypes.SELECT
            }
        );

        const row = result[0];
        const status = row.others;

        // Set dossier status based on retrieved values
        if (row.cancelled === "-1") {
            statusOfThisFolder = "Cancelled";
        } else if (status === "-3") {
            statusOfThisFolder = "Inf. Rqsted";
        } else if (status === "-7") {
            statusOfThisFolder = "Not available";
        } else if (status === "6") {
            statusOfThisFolder = "Quoted";
        } else if (status === "4") {
            statusOfThisFolder = "Confirmed";
        } else if (status === "3") {
            statusOfThisFolder = "Answered and relaunched";
        } else if (status === "2") {
            statusOfThisFolder = "Answered";
        } else if (status === "1") {
            if (row.substatus === "2") {
                statusOfThisFolder = `In Process by ${row.processed_by}`;
            } else if (row.substatus === "0") {
                statusOfThisFolder = "Not Available";
            }
        }

        res.status(200).json({ statusOfThisFolder });
    } catch (error) {
        console.error("Error fetching dossier status for hospital:", error);
        res.status(500).json({ statusOfThisFolder: "Error" });
    }
});


module.exports= route
