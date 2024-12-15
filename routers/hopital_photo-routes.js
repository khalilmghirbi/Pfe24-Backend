const express = require('express')
const route= express.Router()
const db= require('../models/index')
const { sequelize } = require('../models');
const MediaDTO = require('../dtos/mediaDto')
const multer = require('multer');
const path = require('path');// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    // Save the file with original name, you can modify this logic as needed
    cb(null, file.originalname);
  }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

route .post('/addphoto/:id',(req,res,next)=>{
    db.Hopital_photos.create({
        photo_path:req.body.path,
        hopital_id:req.params.id,
        photo_desc:req.body.desc,
        photo_type:req.body.type,
        display_order:req.body.displayOrder
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

// Create a POST endpoint for file upload
route.post('/photo/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  // Respond with the full file info
  res.status(200).json(req.file);
});

// Make sure 'uploads' directory exists
const fs = require('fs');
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir);
}

/// valider
route.get('/photos', (req,res,next)=>{
    db.Hopital_photos.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.delete('/photos/:hopital_photos_id', (req, res, next) => {
    db.Hopital_photos.destroy({ where: { hopital_photos_id: req.params.hopital_photos_id }})
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: 'photo deleted successfully' });
        } else {
          res.status(404).json({ error: 'photo not found' });
        }
      })
      .catch((err) => {
        console.error(err); // Log the error if there is any
        res.status(400).json({ error: 'Failed to delete photo' });
      });
  });

//validée
  route.get('/mediabyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
 SELECT
            hp.hopital_photos_id,
            hp.photo_path,
            hp.photo_desc,
            hp.photo_type,
            hp.photo_lang,
            hp.display_order
        FROM
            hopital_photos hp
        WHERE
            hp.hopital_id = ${parseInt(hopital_id)}                             
  `;
        // Exécution de la requête SQL
        const hopitalmedia = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        const mediaDto = hopitalmedia.map(media => new MediaDTO(media))
        return res.status(200).json(mediaDto);
        //return res.status(200).json(hopitalmedia);
    } catch (error) {
        console.error('Error retrieving hopitalmedia:', error);
        return res.status(500).json({ message: 'Error retrieving hopitalmedia', error: error.message });
    }
  });


module.exports= route
