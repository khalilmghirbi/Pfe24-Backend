const express = require('express')
const route= express.Router()
const { Sequelize, Op } = require('sequelize')
const db= require('../models/index')
const { where } = require('sequelize')
const { sequelize, dossier, client, dossier_rdv, Dossier_cliniques, hopital, ville, users } = require('../models'); // Assurez-vous que le chemin est correct
const { dateToDbFormat } = require('../helpers/dateHelper');
const bodyParser = require('body-parser')
/*
// Endpoint pour récupérer les messages non lus
route.get('/unanswered-messages', (req, res) => {
  const hospitalsId = req.query.hospitalsId; // Reçu sous forme de tableau d'IDs d'hôpitaux
  const theDossierId = req.query.dossierId;
  const userId = req.query.userId; // L'ID de l'utilisateur actuel

  if (hospitalsId && hospitalsId.length >= 1) {
      const sql = `
          SELECT ddm.discussion_intervenant, dd.discussion_dossier as dossier_id
          FROM dossier_discussion_message ddm
          INNER JOIN dossier_discussions dd ON ddm.discussion_id = dd.discussion_id
          INNER JOIN users u ON u.id_user = ddm.discussion_intervenant
          WHERE discussion_hopital_id IN (${hospitalsId.map(id => db.escape(id)).join(',')})
          AND dd.discussion_dossier = ?
          AND discussion_datecreation = (
              SELECT MAX(discussion_datecreation)
              FROM dossier_discussion_message dm2 
              WHERE dm2.discussion_id = ddm.discussion_id
          )
          AND discussion_intervenant <> ?
          AND user_type = 'patient'
          GROUP BY ddm.discussion_id
      `;

      db.query(sql, [theDossierId, userId], (err, results) => {
          if (err) {
              console.error('Erreur lors de l\'exécution de la requête:', err);
              return res.status(500).json({ error: 'Erreur lors de l\'exécution de la requête' });
          }
          res.json(results);
      });
  } else {
      res.json([]);
  }
}
);*/

  
    

module.exports= route