const express = require('express')
const route= express.Router()
const db= require('../models/index')



/// valider
route.get('/rdvs', (req,res,next)=>{
    db.Dossier_rdv.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/rdv/:rdv_id', (req,res,next)=>{
    db.Hopital_contacts.findOne({where:{rdv_id:req.params.rdv_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

module.exports= route