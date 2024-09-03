const express = require('express')
const route= express.Router()
const db= require('../models/index')



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

module.exports= route