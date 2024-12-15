const express = require('express')
const route= express.Router()
const db= require('../models/index')
const { sequelize,procedures } = require('../models'); // Assurez-vous que le chemin est correct

const Procedures = require("../models/procedures")
//const { sequelize } = require('../models'); 
const { where } = require('sequelize')
const bodyParser = require('body-parser')
const TreatmentDTO = require('../dtos/treatmentDto');

route.post('/createtreatment/:id',async (req,res,next)=>{
    const hopital_id = req.params.id;
    try {
        // Step 1: Create the new procedure
        const procedure = await db.Procedures.create({
            procedure_name: req.body.name,
            procedure_name_fr: req.body.name,
            procedure_name_en: req.body.name,
            procedure_description_fr: " "
        });

        // Step 2: Link the created procedure to the hospital
        await db.Hopital_procedures.create({
            hopital_id,  // Hospital ID
            procedures_id: procedure.procedure_id  // Procedure ID from the created procedure
        });
    } catch (error) {
        res.status(400).send(error)
    }

    return res.status(200).send();
})


/// valideeeeee
route.get('/treatments', async(req,res,next)=>{
    let sql = `

        SELECT DISTINCT 
        procedure_name
        FROM procedures p
        JOIN hopital_procedures hp ON p.procedure_id = hp.procedures_id
        

  `;
    // Exécution de la requête SQL
    const hopitaltreatments = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
    return res.status(200).json(hopitaltreatments.map(v => v.procedure_name));
    
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
        const treatmentDto = hopitaltreatments.map(treatment => new TreatmentDTO(treatment))
        return res.status(200).json(treatmentDto);
        //return res.status(200).json(hopitaltreatments);
    } catch (error) {
        console.error('Error retrieving treatments:', error);
        return res.status(500).json({ message: 'Error retrieving treatments', error: error.message });
    }
  });




module.exports= route