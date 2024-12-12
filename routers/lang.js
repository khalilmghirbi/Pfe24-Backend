const express = require('express')
const route= express.Router()
const db= require('../models/index')
const User = require("../models/users")
const { where } = require('sequelize')
const { sequelize ,Hopital_avis, Dossier_cliniques, Hopital, Hopital_managers } = require('../models');

/// valideeeeee
route.get('/languages', async(req,res,next)=>{
    let sql = `

        SELECT DISTINCT 
        lang_name
        FROM languages l
        JOIN hopital_langues hl ON l.lang_id = hl.lang_id
        

  `;
    // Exécution de la requête SQL
    const hopitallanguages = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
    return res.status(200).json(hopitallanguages.map(v => v.lang_name));
    
})
module.exports= route