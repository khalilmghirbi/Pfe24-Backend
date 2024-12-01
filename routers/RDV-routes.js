const express = require('express')
const route= express.Router()
const db= require('../models/index')
const { sequelize } = require('../models');
const AppointmentDTO = require('../dtos/appointmentDto');


/// valider
route.get('/rdvs', (req,res,next)=>{
    db.Dossier_rdv.findAll()
    .then((response)=>res.status(200).send(response.map(rdv => new AppointmentDTO(rdv))))
    .catch((err)=>res.status(400).send(err))
})

route.get('/rdv/:rdv_id', (req,res,next)=>{
    db.Hopital_contacts.findOne({where:{rdv_id:req.params.rdv_id}})
    .then((response)=>res.status(200).send(new AppointmentDTO(response)))
    .catch((err)=>res.status(400).send(err))
})

route.get('/rdvsbydossierid/:id', async (req, res, next) => {
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
        const hopitalrdvs = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(hopitalrdvs.map(rdv => new AppointmentDTO(rdv)));
    } catch (error) {
        console.error('Error retrieving rendez-vous:', error);
        return res.status(500).json({ message: 'Error retrieving rendez-vous', error: error.message });
    }
  });

module.exports= route