const express = require('express')
const route= express.Router()
const db= require('../models/index')
const User = require("../models/users")
const { where } = require('sequelize')
const { sequelize ,Hopital_avis, Dossier_cliniques, Hopital, Hopital_managers } = require('../models');
const ProfileDTO = require('../dtos/profilDto')


// route.get('/clinics/:creator_id', async (req, res, next) => {
//     try {   
//         let user = req.params.creator_id; 
        
//         if (!user) {
//             return res.status(400).json({ message: 'User ID is required' });
//         } 
  
//         let sql = `
//               SELECT * FROM hopital
//             WHERE creator_id =  ${user}                           
//         `;
  
//         //select * from hopital WHERE h.creator_id = ${user} list des hopitaux
//         // Exécution de la requête SQL
//         const clinics = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
//         return res.status(200).json(clinics);
//     } catch (error) {
//         console.error('Error retrieving clinics:', error);
//         return res.status(500).json({ message: 'Error retrieving clinics', error: error.message });
//     }
//   });


  //////////////////////////////////////////////////
  route.get('/clinics/:creator_id', async (req, res, next) => {
    try {   
        let user = req.params.creator_id; 
        
        if (!user) {
            return res.status(400).json({ message: 'User ID is required' });
        } 
  
        let sql = `
              SELECT 
            hopital_id,
        
        hopital_name
              FROM hopital
            WHERE creator_id =  ${user}                           
        `;
  
        //select * from hopital WHERE h.creator_id = ${user} list des hopitaux
        // Exécution de la requête SQL
        const clinics = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const clinicsDto = clinics.map(clinic => {return {id: clinic.hopital_id, name: clinic.hopital_name}})
        return res.status(200).json(clinicsDto);
    } catch (error) {
        console.error('Error retrieving clinics:', error);
        return res.status(500).json({ message: 'Error retrieving clinics', error: error.message });
    }
  });
  route.get('/clinic/:id', async (req, res, next) => {
    try {   
        let clinicId = req.params.id; 
        
        if (!clinicId) {
            return res.status(400).json({ message: 'User ID is required' });
        } 
  
        let sql = `
              SELECT * FROM hopital
            WHERE hopital_id =  ${clinicId}                           
        `;
  
        //select * from hopital WHERE h.creator_id = ${user} list des hopitaux
        // Exécution de la requête SQL
        const clinics = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(clinics);
    } catch (error) {
        console.error('Error retrieving clinics:', error);
        return res.status(500).json({ message: 'Error retrieving clinics', error: error.message });
    }
  });

//////////////////////////////////////////////////////////////
route.get('/profil', async(req,res,next)=>{
    let sql = `

        SELECT 
    h.hopital_id,
    h.hopital_name,
    h.hopital_logo,
    h.hopital_adress,
    h.hopital_city,
    h.hopital_cp,
    h.hopital_tel,
    h.hopital_emailcontact,
    h.hopital_description,
    s.service_id,
    s.service_name,
    s.service_name_en,
    s.service_name_ar,
    s.service_name_ru,
    s.service_name_es,
    s.service_icon_class
FROM 
    hopital h
LEFT JOIN 
    hopital_services hs ON h.hopital_id = hs.hopital_id
LEFT JOIN 
    services s ON hs.service_id = s.service_id


  `;
    // Exécution de la requête SQL
    const hopitalprofil = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
    const profilDto = hopitalprofil.map(profil => new ProfileDTO(profil))
        return res.status(200).json(profilDto);
    //return res.status(200).json(hopitalprofil);
})
/*
route.get('/profilbyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `

        SELECT 
    h.hopital_id,
    h.hopital_name,
    h.hopital_logo,
    h.hopital_adress,
    h.hopital_city,
    h.hopital_cp,
    h.hopital_tel,
    h.hopital_emailcontact,
    h.hopital_description,
    s.service_id,
    s.service_name,
    s.service_name_en,
    s.service_name_ar,
    s.service_name_ru,
    s.service_name_es,
    s.service_icon_class
FROM 
    hopital h
LEFT JOIN 
    hopital_services hs ON h.hopital_id = hs.hopital_id
LEFT JOIN 
    services s ON hs.service_id = s.service_id
WHERE h.hopital_id = ${parseInt(hopital_id)}

  `;
        // Exécution de la requête SQL
        const hopitalprofil = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        //const profilDto = hopitalprofil.map(profil => new ProfileDTO(profil))
        //return res.status(200).json(profilDto);
        return res.status(200).json(hopitalprofil);
    } catch (error) {
        console.error('Error retrieving profil:', error);
        return res.status(500).json({ message: 'Error retrieving profil', error: error.message });
    }
  });*/


  route.get('/profilbyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `

        SELECT 
        *        
FROM 
    hopital h
WHERE h.hopital_id = ${parseInt(hopital_id)}

  `;
        // Exécution de la requête SQL
        const hopitalprofil = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

        let sqlservice = `

        SELECT 
    
    s.service_name
   
FROM 
    services s
LEFT JOIN 
    hopital_services hs ON hs.service_id = s.service_id
WHERE hs.hopital_id = ${parseInt(hopital_id)}

  `;
  const services = (await sequelize.query(sqlservice, { type: sequelize.QueryTypes.SELECT })).map(service => service.service_name);
  
        const profilDto = new ProfileDTO(hopitalprofil[0], services);
        return res.status(200).json(profilDto);
    } catch (error) {
        console.error('Error retrieving profil:', error);
        return res.status(500).json({ message: 'Error retrieving profil', error: error.message });
    }
  });


  module.exports= route