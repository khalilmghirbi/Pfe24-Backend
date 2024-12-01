const express = require('express')
const route= express.Router()
const db= require('../models/index')
const Hopital_hotels = require("../models/hopital_hotels")
const { where } = require('sequelize')
const { sequelize } = require('../models'); 
//const { dateToDbFormat } = require('../helpers/dateHelper');
const bodyParser = require('body-parser')
const hopital_hotelsController = require("../controlles/hopital_hotelsController")
const HotelDTO = require('../dtos/hotelDto')

route .post('/createhotel',(req,res,next)=>{
    db.Hopital_hotels.create({
        //hotel_hopitalid:req.body.hotel_hopitalid,
        hotel_name:req.body.hotel_name,
        hotel_stars:req.body.hotel_stars,
        hotel_link:req.body.hotel_link,
        hotel_singleroom:req.body.hotel_singleroom,
        hotel_doubleroom:req.body.hotel_doubleroom,
        hotel_address:req.body.hotel_address
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})


route.get('/hotel/:hotel_id', (req,res,next)=>{
    db.Hopital_hotels.findOne({where:{hotel_id:req.params.hotel_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/// valider
route.get('/hotels', (req,res,next)=>{
    db.Hopital_hotels.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/// valider
route.put('/hotel/:hotel_id', (req,res,next)=>{
    db.Hopital_hotels.update({
       // hotel_hopitalid:req.body.hotel_hopitalid,
        hotel_name:req.body.hotel_name,
        hotel_stars:req.body.hotel_stars,
        hotel_link:req.body.hotel_link,
        hotel_singleroom:req.body.hotel_singleroom,
        hotel_doubleroom:req.body.hotel_doubleroom,
        hotel_address:req.body.hotel_address
    },{where:{hotel_id:req.params.hotel_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
///valider 
/*route.delete('/hotel/:hotel_id', (req,res,next)=>{
    db.Hopital_hotels.destroy({where:{hotel_id:req.params.hotel_id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})*/


route.delete('/hotel/:hotel_id', (req, res, next) => {
    db.Hopital_hotels.destroy({ where: { hotel_id: req.params.hotel_id }})
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: 'Hotel deleted successfully' });
        } else {
          res.status(404).json({ error: 'Hotel not found' });
        }
      })
      .catch((err) => {
        console.error(err); // Log the error if there is any
        res.status(400).json({ error: 'Failed to delete hotel' });
      });
  });

//validée
route.get('/hotelbyhopital/:id', async (req, res, next) => {
  try {
      const hopital_id = req.params.id;
      // Construire la requête SQL avec une variable $filterCdt
      let sql = `
SELECT 
hotel_name,
hotel_stars
FROM hopital_hotels  
              where hopital_hotels.hotel_hopitalid = ${parseInt(hopital_id)}                             
`;
      // Exécution de la requête SQL
      const hopitalhotels = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
      const hotelDto = hopitalhotels.map(hotel => new HotelDTO(hotel))
      return res.status(200).json(hotelDto);
      //return res.status(200).json(hopitalhotels);
  } catch (error) {
      console.error('Error retrieving hotels:', error);
      return res.status(500).json({ message: 'Error retrieving hotels', error: error.message });
  }
});

module.exports= route
