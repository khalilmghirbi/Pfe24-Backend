const express = require('express')
const route= express.Router()
const db= require('../models/index')
const { sequelize,procedures } = require('../models'); // Assurez-vous que le chemin est correct

const Procedures = require("../models/procedures")
//const { sequelize } = require('../models'); 
const { where } = require('sequelize')
const bodyParser = require('body-parser')

route .post('/createtreatment',(req,res,next)=>{
    db.Procedures.create({
        //hotel_hopitalid:req.body.hotel_hopitalid,
        procedure_name:req.body.procedure_name,
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


/// valideeeeee
route.get('/treatments', async(req,res,next)=>{
    let sql = `

        SELECT *
        FROM procedures p
        JOIN hopital_procedures hp ON p.procedure_id = hp.procedures_id
        

  `;
    // Exécution de la requête SQL
    const hopitaltreatments = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
    return res.status(200).json(hopitaltreatments);
})

//validée
route.get('/treatmentbyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `

        SELECT *
        FROM procedures p
        JOIN hopital_procedures hp ON p.procedure_id = hp.procedures_id
        WHERE hp.hopital_id = ${parseInt(hopital_id)}

  `;
        // Exécution de la requête SQL
        const hopitaltreatments = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(hopitaltreatments);
    } catch (error) {
        console.error('Error retrieving treatments:', error);
        return res.status(500).json({ message: 'Error retrieving treatments', error: error.message });
    }
  });




module.exports= route