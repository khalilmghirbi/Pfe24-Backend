const express = require('express')
const route= express.Router()
const db= require('../models/index')
const Hopital_managers = require("../models/hopital_managers")
const { where } = require('sequelize')
const bodyParser = require('body-parser')
const { sequelize } = require('../models');
const ManagerDTO = require('../dtos/managerDto')

route .post('/createmanager/:id',(req,res,next)=>{
    db.Hopital_managers.create({
        hopital_id:req.params.id,
        hopitalmanager_fullname:req.body.name,
        hopitalmanager_email:req.body.email,
        hopitalmanager_countries:req.body.country,

    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/manager/:hopitalmanager_id', (req,res,next)=>{
    db.Hopital_managers.findOne({where:{hopitalmanager_id:req.params.hopitalmanager_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
//valider tester front mais manque hopital 
route.get('/managers', async (req,res,next)=>{
    try {
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
 SELECT
            hm.hopitalmanager_id,
            hm.hopitalmanager_fullname,
            hm.hopitalmanager_email,
            hm.hopitalmanager_countries,
            hm.hopitalmanager_phone,
            h.hopital_name
        FROM
            hopital_managers hm
        JOIN
            hopital h ON h.hopital_id = hm.hopital_id                            
  `;
        // Exécution de la requête SQL
        const hopitalmanagers = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const managerDto = hopitalmanagers.map(manager => new ManagerDTO(manager))
      return res.status(200).json(managerDto);
        //return res.status(200).json(hopitalmanagers);
    } catch (error) {
        console.error('Error retrieving hopitalmanagers:', error);
        return res.status(500).json({ message: 'Error retrieving hopitalmanagers', error: error.message });
    }
})
//valider tester front
route.put('/manager/:hopitalmanager_id', (req,res,next)=>{
    db.Hopital_managers.update({
        //hopitalmanager_id:req.body.hopitalmanager_id,
        hopital_id:req.body.id,
        hopitalmanager_fullname:req.body.name,
        hopitalmanager_phone:req.body.phone,
        hopitalmanager_email:req.body.email,
        hopitalmanager_photo:req.body.hopital,
        hopitalmanager_countries:req.body.country,
        //hopitalmanager_deleted:req.body.hopitalmanager_deleted,
    },{where:{hopitalmanager_id:req.params.hopitalmanager_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

//validée
route.get('/managersbyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
 SELECT
            hm.hopitalmanager_id,
            hm.hopitalmanager_fullname,
            hm.hopitalmanager_email,
            hm.hopitalmanager_countries,
            hm.hopitalmanager_phone,
            h.hopital_name
        FROM
            hopital_managers hm
        JOIN
            hopital h ON h.hopital_id = hm.hopital_id
        WHERE
            h.hopital_id = ${parseInt(hopital_id)}                             
  `;
        // Exécution de la requête SQL
        const hopitalmanagers = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const managerDto = hopitalmanagers.map(manager => new ManagerDTO(manager))
      return res.status(200).json(managerDto);
        //return res.status(200).json(hopitalmanagers);
    } catch (error) {
        console.error('Error retrieving hopitalmanagers:', error);
        return res.status(500).json({ message: 'Error retrieving hopitalmanagers', error: error.message });
    }
  });
  
module.exports= route
