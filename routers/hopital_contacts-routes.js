const express = require('express')
const route= express.Router()
const db= require('../models/index')
const { sequelize } = require('../models');
const ContactDTO = require('../dtos/contactDto')



route .post('/createcontact',(req,res,next)=>{
    db.Hopital_contacts.create({
        //hopitalcontacts_id:req.body.hopitalcontacts_id,
        //hopital_id:req.body.hopital_id,
        hopitalcontacts_fullname:req.body.hopitalcontacts_fullname,
        //hopitalcontacts_phone:req.body.hopitalcontacts_phone,
        hopitalcontacts_email:req.body.hopitalcontacts_email,
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


route.get('/contact/:hopitalcontacts_id', (req,res,next)=>{
    db.Hopital_contacts.findOne({where:{hopitalcontacts_id:req.params.hopitalcontacts_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/// valider
route.get('/contacts', (req,res,next)=>{
    db.Hopital_contacts.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/// valider
route.put('/contact/:hopitalcontacts_id', (req,res,next)=>{
    db.Hopital_contacts.update({
        //hopitalcontacts_id:req.body.hopitalcontacts_id,
        // hopital_id:req.body.hopital_id,
        hopitalcontacts_fullname:req.body.hopitalcontacts_fullname,
       // hopitalcontacts_phone:req.body.hopitalcontacts_phone,
        hopitalcontacts_email:req.body.hopitalcontacts_email,
    },{where:{hopitalcontacts_id:req.params.hopitalcontacts_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
///valider 
/*route.delete('/hotel/:hotel_id', (req,res,next)=>{
    db.Hopital_hotels.destroy({where:{hotel_id:req.params.hotel_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})*/


route.delete('/contact/:hopitalcontacts_id', (req, res, next) => {
    db.Hopital_contacts.destroy({ where: { hopitalcontacts_id: req.params.hopitalcontacts_id }})
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: 'Contact deleted successfully' });
        } else {
          res.status(404).json({ error: 'Contact not found' });
        }
      })
      .catch((err) => {
        console.error(err); // Log the error if there is any
        res.status(400).json({ error: 'Failed to delete Contact' });
      });
  });


  //validée
  route.get('/contactbyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
 SELECT
    hc.hopitalcontacts_id,
    hc.hopitalcontacts_fullname,
    hc.hopitalcontacts_phone,
    hc.hopitalcontacts_email
FROM
    hopital_contacts hc
JOIN
    hopital h ON h.hopital_id = hc.hopital_id
WHERE
    h.hopital_id = ${parseInt(hopital_id)}                             
  `;
        // Exécution de la requête SQL
        const hopitalcontact = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const contactDto = hopitalcontact.map(contact => new ContactDTO(contact))
        return res.status(200).json(contactDto);
       // return res.status(200).json(hopitalcontact);
    } catch (error) {
        console.error('Error retrieving hopitalcontact:', error);
        return res.status(500).json({ message: 'Error retrieving hopitalcontact', error: error.message });
    }
  });


module.exports= route
