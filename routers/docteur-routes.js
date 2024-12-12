const express = require('express')
const route= express.Router()
const db= require('../models/index')
//const Docteur = require("../models/docteur")
const { sequelize}  = require('../models'); // Assurez-vous que le chemin est correct
const DoctorDTO = require('../dtos/doctorDto')

route .post('/createdocteur',(req,res,next)=>{
    db.Hopital_medecins.create({
        hopital_id:req.body.hopital_id,
        hopitalmedecins_fullname:req.body.hopitalmedecins_fullname,
        hopitalmedecins_phone:req.body.hopitalmedecins_phone,
        hopitalmedecins_description:req.body.hopitalmedecins_description,
        hopitalmedecins_photo:req.body.hopitalmedecins_photo,
        hopitalmedecins_langs:req.body.hopitalmedecins_langs,
        hopitalmedecins_status:req.body.hopitalmedecins_status,
        hopitalmedecins_cvfile:req.body.hopitalmedecins_cvfile
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


route.get('/docteur/:hopitalmedecins_id', (req,res,next)=>{
    db.Hopital_medecins.findOne({where:{hopitalmedecins_id:req.params.hopitalmedecins_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/*
route.get('/docteurs', (req,res,next)=>{
    db.Hopital_medecins.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})*/

route.put('/docteur/:hopitalmedecins_id', (req,res,next)=>{
    db.Hopital_medecins.update({
      hopital_id:req.body.hopital_id,
      hopitalmedecins_fullname:req.body.hopitalmedecins_fullname,
      hopitalmedecins_phone:req.body.hopitalmedecins_phone,
      hopitalmedecins_description:req.body.hopitalmedecins_description,
      hopitalmedecins_photo:req.body.hopitalmedecins_photo,
      hopitalmedecins_langs:req.body.hopitalmedecins_langs,
      hopitalmedecins_status:req.body.hopitalmedecins_status,
      hopitalmedecins_cvfile:req.body.hopitalmedecins_cvfile },
    {where:{hopitalmedecins_id:req.params.hopitalmedecins_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/*route.delete('/docteur/:docteur_id', (req,res,next)=>{
    db.Docteur.destroy({where:{docteur_id:req.params.docteur_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})*/

route.delete('/docteur/:hopitalmedecins_id', (req, res, next) => {
    db.Hopital_medecins.destroy({ where: { hopitalmedecins_id: req.params.hopitalmedecins_id }})
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: 'Doctor deleted successfully' });
        } else {
          res.status(404).json({ error: 'Doctor not found' });
        }
      })
      .catch((err) => {
        console.error(err); // Log the error if there is any
        res.status(400).json({ error: 'Failed to delete doctor' });
      });
  });

  route.get('/docteurs', async (req, res, next)=>{
try {
  const hopital_id = req.params.id;
  /*
     // Construction de la requête SQL
     let sql = `SELECT * from Hopital_medecins hm
     LEFT JOIN hopital_medecins_procedures hmp ON hm.hopitalmedecins_id = hmp.medecin_id
     LEFT JOIN procedures p ON p.procedure_id = hmp.procedure_id
     `;
// Log de la requête SQL pour debug
console.log('SQL Query:', sql);*/

let sql = `
SELECT 
    m.hopitalmedecins_id,
    m.hopital_id,
    m.hopitalmedecins_fullname,
    m.hopitalmedecins_phone,
    m.hopitalmedecins_description,
    m.hopitalmedecins_photo,
    m.hopitalmedecins_langs,
    m.hopitalmedecins_status,
    m.hopitalmedecins_cvfile,
    p.procedure_id,
    p.procedure_name,
    p.procedure_description
FROM 
    hopital_medecins AS m
LEFT JOIN 
    hopital_medecins_procedures AS mp ON m.hopitalmedecins_id = mp.medecin_id
LEFT JOIN 
    procedures AS p ON mp.procedure_id = p.procedure_id;


`;

// Exécution de la requête SQL
const doctors = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
const doctorDto = dossiers.map(doctor => new DoctorDTO(doctor))
return res.status(200).json(doctorDto);
//return res.status(200).json(doctors);
} catch (error) {
console.error('Error retrieving doctors:', error);
return res.status(500).json({ message: 'Error retrieving doctors', error: error.message });
}
});
  

//validée
route.get('/doctorbyhopital/:id', async (req, res, next) => {
  try {
      const hopital_id = req.params.id;
      let sql = `
      SELECT 
          m.hopitalmedecins_id,
          m.hopital_id,
          m.hopitalmedecins_fullname,
          m.hopitalmedecins_phone,
          m.hopitalmedecins_description,
          m.hopitalmedecins_photo,
          m.hopitalmedecins_langs,
          m.hopitalmedecins_status,
          m.hopitalmedecins_cvfile,
          p.procedure_id,
          p.procedure_name,
          p.procedure_description
      FROM 
          hopital_medecins AS m
      LEFT JOIN 
          hopital_medecins_procedures AS mp ON m.hopitalmedecins_id = mp.medecin_id
      LEFT JOIN 
          procedures AS p ON mp.procedure_id = p.procedure_id
      WHERE
          m.hopital_id = ${parseInt(hopital_id)}
      `;  
      // Exécution de la requête SQL
      const hopitaldoctor = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
      const doctorDto = hopitaldoctor.map(doctor => new DoctorDTO(doctor))
      return res.status(200).json(doctorDto);
     // return res.status(200).json(hopitaldoctor);
  } catch (error) {
      console.error('Error retrieving hopitaldoctor:', error);
      return res.status(500).json({ message: 'Error retrieving hopitaldoctor', error: error.message });
  }
});



module.exports= route
