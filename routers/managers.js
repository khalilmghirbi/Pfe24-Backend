const express = require('express')
const route= express.Router()
const db= require('../models/index')
const User = require("../models/users")
const { where } = require('sequelize')
const { sequelize ,Hopital_avis, Dossier_cliniques, Hopital, Hopital_managers } = require('../models');

// Dictionnaire d'abréviations de pays vers leur nom complet
const countryNames = {
    USA: "United States", UK: "United Kingdom", FR: "France", DE: "Germany", CA: "Canada", JP: "Japan",
    CN: "China", IN: "India", AU: "Australia", BR: "Brazil", IT: "Italy", RU: "Russia",
    ES: "Spain", MX: "Mexico", KR: "South Korea", SA: "Saudi Arabia", ZA: "South Africa", AR: "Argentina",
    NL: "Netherlands", SE: "Sweden", CH: "Switzerland", BE: "Belgium", AT: "Austria", NO: "Norway",
    DK: "Denmark", FI: "Finland", NZ: "New Zealand", IE: "Ireland", GR: "Greece", PT: "Portugal",
    PL: "Poland", TR: "Turkey",SG: "Singapore", MY: "Malaysia", TH: "Thailand",
    PH: "Philippines", VN: "Vietnam", ID: "Indonesia", EG: "Egypt", AE: "United Arab Emirates", QA: "Qatar",
    KW: "Kuwait", NG: "Nigeria", KE: "Kenya", CL: "Chile", CO: "Colombia", PE: "Peru",
    VE: "Venezuela",BY: "Belarus", MA: "Morocco", TZ: "Tanzania", UZ: "Uzbekistan", LK: "Sri Lanka", LB: "Lebanon",
    BD: "Bangladesh", RS: "Serbia", BG: "Bulgaria", HU: "Hungary", MD: "Moldova", AZ: "Azerbaijan",
    PE: "Peru", UA: "Ukraine", LT: "Lithuania", SK: "Slovakia", SI: "Slovenia", HR: "Croatia",
    MT: "Malta", CY: "Cyprus", GE: "Georgia", JO: "Jordan", SY: "Syria", IQ: "Iraq",
    LV: "Latvia", EE: "Estonia", MN: "Mongolia", AM: "Armenia", KW: "Kuwait", OM: "Oman",
    YT: "Mayotte", PM: "Saint Pierre and Miquelon", RE: "Réunion", WF: "Wallis and Futuna", VU: "Vanuatu",
    MH: "Marshall Islands"
};

// Fonction pour convertir l'abréviation en nom complet
function getFullCountryName(abbreviation) {
  return countryNames[abbreviation] || abbreviation;
}

// Route pour récupérer tous les managers
route.get('/AllManagers/:creator_id', async (req, res, next) => {
  try {   
      let user = req.params.creator_id; 
      
      if (!user) {
          return res.status(400).json({ message: 'User ID is required' });
      } 

      let sql = `
          SELECT
          hopitalmanager_id,
          hopitalmanager_fullname,
          hopitalmanager_email,
          hopitalmanager_phone,
          hopital_name,
          hopitalmanager_countries

          FROM hopital_managers hm
          INNER JOIN hopital h ON h.hopital_id = hm.hopital_id
          WHERE h.creator_id = ${user}              
      `;

      //select * from hopital WHERE h.creator_id = ${user} list des hopitaux
      // Exécution de la requête SQL
      const managers = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

      // Convertir les abréviations de pays en noms complets
      const managersWithFullCountryNames = managers.map(manager => {
          return {
              ...manager,
              hopitalmanager_countries: getFullCountryName(manager.hopitalmanager_countries)
          };
      });

      return res.status(200).json(managersWithFullCountryNames);
  } catch (error) {
      console.error('Error retrieving managers:', error);
      return res.status(500).json({ message: 'Error retrieving managers', error: error.message });
  }
});

/*
route.get('/AllManagers/:creator_id', async (req, res, next) => {
    try {   
        let user = req.params.creator_id; 
        
        if (!user) {
            return res.status(400).json({ message: 'User ID is required' });
        } 

        let sql = `
  SELECT
  hopitalmanager_id,
  hopitalmanager_fullname,
  hopitalmanager_email,
  hopitalmanager_phone,
  hopital_name,
  hopitalmanager_countries

   FROM hopital_managers hm
                INNER JOIN hopital h ON h.hopital_id = hm.hopital_id
                WHERE h.creator_id = ${user}              
`;
        // Exécution de la requête SQL
        const managers = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

        
        return res.status(200).json(managers);
    } catch (error) {
        console.error('Error retrieving managers:', error);
        return res.status(500).json({ message: 'Error retrieving managers', error: error.message });
    }
});
*/
route.delete('/managerUs/:hopitalmanager_id', (req, res, next) => {
    db.Hopital_managers.destroy({ where: { hopitalmanager_id: req.params.hopitalmanager_id }})
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: 'hopital manager deleted successfully' });
        } else {
          res.status(404).json({ error: 'hopital manager not found' });
        }
      })
      .catch((err) => {
        console.error(err); 
        res.status(400).json({ error: 'Failed to delete hopital manager' });
      });
  });

  
route.put('/managerUsupdate/:hopitalmanager_id', (req,res,next)=>{
  db.Hopital_managers.update({

      hopitalmanager_fullname:req.body.name,
      hopitalmanager_email:req.body.email
      
  },{where:{hopitalmanager_id:req.params.hopitalmanager_id}})
  .then((response)=>res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
})

module.exports= route