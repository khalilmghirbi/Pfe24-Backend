const express = require('express');
const route = express.Router();
const db= require('../models/index')
const { Op, Sequelize } = require('sequelize');
const { sequelize ,Hopital_avis, Dossier_cliniques, Hopital, Hopital_managers } = require('../models');
const bodyParser = require('body-parser');
const ReviewDTO = require('../dtos/reviewDto');
//const Hopital_avis = require('./models/hopitalavis')(sequelize, Sequelize);

/*
// Define route for retrieving avis
route.post('/avis', async (req, res, next) => {
    try {
        const { patientNote, rev_manager_id, rev_treatment, rev_hop, rev_status, hopitalavis_hopital_id } = req.body;
        const filterCdt = {};

        // Gestion des filtres
        if (patientNote) {
            filterCdt.hopitalavis_commenten = { [Op.like]: `%${patientNote}%` };
        }

        if (rev_manager_id) {
            const manager = await Hopital_managers.findByPk(rev_manager_id);
            if (manager) {
                filterCdt[Op.or] = [
                    { processed_by: rev_manager_id },
                    { processed_by: { [Op.like]: `%${manager.hopitalmanager_fullname}%` } }
                ];
            }
        }

        if (rev_treatment) {
            filterCdt.hopitalavis_dossier = {
                [Op.in]: Sequelize.literal(`(SELECT dossier_id FROM dossier_procedures WHERE procedure_id = ${rev_treatment})`)
            };
        }

        if (rev_hop) {
            filterCdt.hopitalavis_hopital_id = rev_hop;
        }

        if (rev_status !== undefined) {
            filterCdt.hopitalavis_reply = rev_status == 0
                ? { [Op.or]: [{ [Op.is]: null }, { [Op.trim]: '' }] }
                : { [Op.and]: [{ [Op.not]: null }, { [Op.not]: '' }] };
        }

        if (hopitalavis_hopital_id) {
            filterCdt.hopitalavis_hopital_id = hopitalavis_hopital_id;
        } else {
            // Provide a default ID for testing purposes (replace with a valid ID)
            filterCdt.hopitalavis_hopital_id = 1; // Change this as needed
        }

        // Construction de la requête
        const avis = await Hopital_avis.findAll({
            where: filterCdt,
            include: [
                {
                    model: Dossier_cliniques,
                    as: 'dossier_cliniques',
                    required: false,
                    attributes: []
                },
                {
                    model: Hopital,
                    as: 'hopital',
                    required: false,
                    attributes: []
                }
            ],
            group: ['hopitalavis_id'],
            order: [['hopitalavis_date', 'DESC']]
        });

        return res.status(200).json(avis);
    } catch (error) {
        console.error('Error retrieving avis:', error);
        return res.status(500).json({ message: 'Error retrieving avis', error: error.message });
    }
});*/
/*
route.get('/avis', async (req, res, next) => {
       
    let filterCdt = '';
    let filterHAVING = '';
    // Construction de la requête SQL
let sql = `SELECT
hopital_avis.hopitalavis_id,
hopital_avis.hopitalavis_fullname,
hopital_avis.hopitalavis_note,
hopital_avis.hopitalavis_comment,
hopital_avis.hopitalavis_hopital_id,
hopital_avis.hopitalavis_dossier,
hopital_avis.hopitalavis_date,
hopital_avis.hopitalavis_lang,
hopital_avis.hopitalavis_reply,
hopital_avis.hopitalavis_country,
MIN(dc.dispatch_datetime) AS dispatch_datetime,
MAX(dc.status) AS hopitalStatus,
(SELECT user_lang FROM users u WHERE u.client_id = hopital_avis.hopitalavis_hopital_id LIMIT 1) AS user_lang,
(SELECT country FROM access_ip WHERE ip_adress = hopital_avis.hopitalavis_ip) AS country,
(SELECT GROUP_CONCAT(procedure_name_en ORDER BY procedure_name_en SEPARATOR '**') 
 FROM procedures p 
 INNER JOIN dossier_procedures dp ON dp.procedure_id = p.procedure_id 
 WHERE dp.dossier_id = hopital_avis.hopitalavis_dossier) AS list_procedures
FROM hopital_avis
LEFT JOIN dossier_cliniques dc ON dc.dossier_id = hopital_avis.hopitalavis_dossier
LEFT JOIN hopital h ON h.hopital_id = hopital_avis.hopitalavis_hopital_id
WHERE 1 = 1 ${filterCdt}`;

sql += ` AND hopitalavis_deleted IS NULL
GROUP BY hopital_avis.hopitalavis_id ${filterHAVING}
ORDER BY hopital_avis.hopitalavis_date DESC`;

// Log de la requête SQL pour debug
console.log('SQL Query:', sql);

// Exécution de la requête SQL
const avis = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

return res.status(200).json(avis);
});


module.exports = route;*/

route.get('/avis', async (req, res, next) => {
    try {
        // Construire la requête SQL avec une variable $filterCdt
        let filterCdt = ''; // Initialisez à vide par défaut
        if (req.query.someCondition) {
            filterCdt = `AND dc.some_column = '${req.query.someCondition}'`; // Exemple de condition basée sur un paramètre de requête
        }     
        let sql = `
  SELECT 
  hopitalavis_comment,
  hopitalavis_fullname,
  hopitalavis_date,
  hopitalavis_moyenne_rate,
  hopital_name,
  hopitalavis_id,
  hopitalavis_hopital_id,
  procedure_name,
  hopitalavis_reply_en,
  hopitalavis_reply,
  hopitalmanager_fullname
   FROM hopital_avis m
                INNER JOIN dossier_cliniques dc ON dc.dossier_id = m.hopitalavis_dossier
                LEFT JOIN hopital h ON h.hopital_id = m.hopitalavis_hopital_id
                INNER JOIN dossier_procedures dp ON dp.dossier_id = m.hopitalavis_dossier
                INNER JOIN procedures p ON p.procedure_id = dp.procedure_id 
                LEFT JOIN hopital_managers hm ON hm.hopitalmanager_id =dc.processed_by
                WHERE 1 = 1                
                GROUP BY m.hopitalavis_id
                ORDER BY hopitalavis_date DESC
`;

        
        // Exécution de la requête SQL
        const reviews = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const reviewsDto = reviews.map(dossier => new ReviewDTO(dossier))

        
        return res.status(200).json(reviewsDto);
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        return res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
    }
});

//////////////////////////
route.get('/avis/:id', async (req, res, next) => {
    try {
        const avisId = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let filterCdt = ''; // Initialisez à vide par défaut
        if (req.query.someCondition) {
            filterCdt = `AND dc.some_column = '${req.query.someCondition}'`; // Exemple de condition basée sur un paramètre de requête
        }     
        let sql = `
  SELECT 
 
  hopitalavis_comment,
  hopitalavis_medecin_rate,
  hopitalavis_translator_rate,
  hopitalavis_service_rate,
  hopitalavis_note,
  hopitalavis_id,
  hopitalavis_fullname,
  hopitalavis_date,
  hopitalavis_moyenne_rate,
  hopital_name,
  procedure_name,
  hopitalavis_reply_en,
  hopitalavis_reply,
  hopitalmanager_fullname
   FROM hopital_avis m
                LEFT JOIN dossier_cliniques dc ON dc.dossier_id = m.hopitalavis_dossier
                LEFT JOIN hopital h ON h.hopital_id = m.hopitalavis_hopital_id
                INNER JOIN dossier_procedures dp ON dp.dossier_id = m.hopitalavis_dossier
                INNER JOIN procedures p ON p.procedure_id = dp.procedure_id 
                LEFT JOIN hopital_managers hm ON hm.hopitalmanager_id =h.hopital_id
                WHERE m.hopitalavis_id = ${parseInt(avisId)}                 
                GROUP BY m.hopitalavis_id
                ORDER BY hopitalavis_date DESC
                
`;

        
        // Exécution de la requête SQL
        const reviews = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const reviewsDto = reviews.map(dossier => new ReviewDTO(dossier))

        
        return res.status(200).json(reviewsDto);
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        return res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
    }
});

route.put('/avis/:hopitalavis_id', (req,res,next)=>{
   db.Hopital_avis.update({
       
       hopitalavis_reply:req.body.reply,

    },{where:{hopitalavis_id:req.params.hopitalavis_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


        
    module.exports= route