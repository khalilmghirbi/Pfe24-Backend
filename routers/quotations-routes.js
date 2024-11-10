const express = require('express')
const { Dossier_quotations } = require('../models');
const route= express.Router()
const db= require('../models/index')
const { sequelize } = require('../models');

/// valider
route.get('/quotations', (req,res,next)=>{
    db.Dossier_quotations.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.get('/quotation/:quotation_id', (req,res,next)=>{
    db.Dossier_quotations.findOne({where:{quotation_id:req.params.quotation_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
/*
route.get('/quotabydossierid/:id', async (req, res, next) => {
    try {
        const dossier_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
  SELECT 
            Dossier_rdv.*, 
            Dossier.*, 
            Hopital.hopital_id AS hopital_id_hopital, 
            Hopital.hopital_name, 
            Hopital_hotels.hotel_id, 
            Hopital_hotels.hotel_name, 
            Hopital_hotels.hotel_stars, 
            Hopital_hotels.hotel_address
        FROM 
            Dossier_rdv
        INNER JOIN 
            Dossier ON Dossier.dossier_id = Dossier_rdv.rdv_dossier_id
        INNER JOIN 
            Hopital ON Hopital.hopital_id = Dossier_rdv.hopital_id
        LEFT JOIN 
            Hopital_hotels ON Hopital_hotels.hotel_hopitalid = Hopital.hopital_id
        WHERE 
            Dossier.dossier_id = ${parseInt(dossier_id)};                            
  `;
        // Exécution de la requête SQL
        const quotation = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(quotation);
    } catch (error) {
        console.error('Error retrieving quotation:', error);
        return res.status(500).json({ message: 'Error retrieving quotation', error: error.message });
    }
  });*/


  // Route pour créer une nouvelle quotation
route.post('/create-quotation', async (req, res) => {
    try {
        const {
            dossier_id,
            quotation_hospital,
            quotation_date,
            quotation_price,
            quotation_hospitalisation,
            quotation_post_treatment,
            quotation_post_treatment_max,
            quotation_filepath,
            quotation_message,
            quotation_messagefr,
            quotation_doctor,
            quotation_manager,
            quotation_doctorcv,
            quotation_status,
            quotation_currency,
            quotation_transfertin,
            quotation_hotelin,
            quotation_transferthotelin,
            quotation_hotelbookingnights,
            quotation_hotelbooking,
            quotation_hotelbookingprice,
            quotation_read,
            quotation_pricemax,
            quotation_signature,
            quotation_remind,
            quotation_services,
            quotation_hotel,
            quotation_roomcapacity,
            quotation_mouthplan,
            read_count,
            step_nb,
            quotation_upperjawdesc_en,
            quotation_upperjawdesc,
            quotation_lowerjawdesc_en,
            quotation_lowerjawdesc,
            quotation_airporthotelprice,
            quotation_hotelhospitalprice,
            quotation_remindj,
            quotation_videolink,
            quotation_transfertzoneincluded,
            quotation_extra_hotel,
            quotation_initial
        } = req.body;

        // Création de la quotation
        const newQuotation = await Dossier_quotations.create({
            dossier_id,
            quotation_hospital,
            quotation_date,
            quotation_price,
            quotation_hospitalisation,
            quotation_post_treatment,
            quotation_post_treatment_max,
            quotation_filepath,
            quotation_message,
            quotation_messagefr,
            quotation_doctor,
            quotation_manager,
            quotation_doctorcv,
            quotation_status,
            quotation_currency,
            quotation_transfertin,
            quotation_hotelin,
            quotation_transferthotelin,
            quotation_hotelbookingnights,
            quotation_hotelbooking,
            quotation_hotelbookingprice,
            quotation_read,
            quotation_pricemax,
            quotation_signature,
            quotation_remind,
            quotation_services,
            quotation_hotel,
            quotation_roomcapacity,
            quotation_mouthplan,
            read_count,
            step_nb,
            quotation_upperjawdesc_en,
            quotation_upperjawdesc,
            quotation_lowerjawdesc_en,
            quotation_lowerjawdesc,
            quotation_airporthotelprice,
            quotation_hotelhospitalprice,
            quotation_remindj,
            quotation_videolink,
            quotation_transfertzoneincluded,
            quotation_extra_hotel,
            quotation_initial
        });

        // Retour de la réponse
        return res.status(201).json({ message: 'Quotation créée avec succès', data: newQuotation });
    } catch (error) {
        console.error('Erreur lors de la création de la quotation:', error);
        return res.status(500).json({ message: 'Erreur lors de la création de la quotation', error });
    }
});

route.get('/clinics/:creator_id/:dossier_id', async (req, res, next) => {
    try { 
        let creatorId = req.params.creator_id;   
        let dossierId = req.params.dossier_id; 
        
        if (!creatorId) 
            {return res.status(400).json({ message: 'Creator ID is required' });}
        if (!dossierId) 
            {return res.status(400).json({ message: 'Dossier ID is required' });}

        let sql = `
        SELECT 
            hopital.*
            
        FROM hopital
        INNER JOIN 
            dossier_cliniques dc ON dc.hopital_id = hopital.hopital_id
        WHERE hopital.creator_id = ${creatorId} AND dc.dossier_id = ${dossierId}
    `;
        // Exécution de la requête SQL
        const dispatchedHopital = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(dispatchedHopital);
    } catch (error) {
        console.error('Error retrieving dispatched hopital:', error);
        return res.status(500).json({ message: 'Error retrieving dispatched hopital', error: error.message });
    }
});

////////////////////////////////////////////////
route.get('/servicesbyhopitalid/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
   SELECT 
            hs.hopital_service_id,
            hs.hopital_id,
            s.service_id AS serviceId,
            s.service_name,
            s.service_name_en,
            s.service_name_ar,
            s.service_name_ru,
            s.service_icon_class,
            s.service_name_es
        FROM 
            Hopital_services hs
        JOIN 
            Services s ON hs.service_id = s.service_id
        WHERE 
            hs.hopital_id = ${parseInt(hopital_id)}
        `;                                       
  
        // Exécution de la requête SQL
        const hopitalservices = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(hopitalservices);
    } catch (error) {
        console.error('Error retrieving hopitalservices:', error);
        return res.status(500).json({ message: 'Error retrieving hopitalservices', error: error.message });
    }
  });


module.exports= route