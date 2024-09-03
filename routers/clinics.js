const express = require('express')
const route= express.Router()
const db= require('../models/index')
const User = require("../models/users")
const { where } = require('sequelize')
const { sequelize ,Hopital_avis, Dossier_cliniques, Hopital, Hopital_managers } = require('../models');


route.get('/clinics/:creator_id', async (req, res, next) => {
    try {   
        let user = req.params.creator_id; 
        
        if (!user) {
            return res.status(400).json({ message: 'User ID is required' });
        } 
  
        let sql = `
              SELECT * FROM hopital
            WHERE creator_id =  ${user}                           
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

  module.exports= route