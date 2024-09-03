const express = require('express');
const router = express.Router();
const { Hopital_avis } = require('../models'); // Adjust the path according to your project structure
const { sequelize , Dossier_cliniques, Hopital, Hopital_managers } = require('../models');

/*
// Route to get reviews for a specific hospital
router.get('/hopital/:hopital_id/avis', async (req, res, next) => {
    try {
        const { hopital_id } = req.params;
        let filterCdt = '';

        // Check if there's a condition in query parameters
        if (req.query.someCondition) {
            filterCdt = `AND dc.some_column = '${req.query.someCondition}'`;
        }

        // Build the SQL query
        const sql = `
            SELECT 
                m.hopitalavis_comment,
                m.hopitalavis_medecin_rate,
                m.hopitalavis_translator_rate,
                m.hopitalavis_service_rate,
                m.hopitalavis_note,
                m.hopitalavis_id,
                m.hopitalavis_fullname,
                m.hopitalavis_date,
                m.hopitalavis_moyenne_rate,
                h.hopital_name,
                p.procedure_name,
                m.hopitalavis_reply_en,
                m.hopitalavis_reply,
                hm.hopitalmanager_fullname
            FROM hopital_avis m
            LEFT JOIN dossier_cliniques dc ON dc.dossier_id = m.hopitalavis_dossier
            LEFT JOIN hopital h ON h.hopital_id = m.hopitalavis_hopital_id
            INNER JOIN dossier_procedures dp ON dp.dossier_id = m.hopitalavis_dossier
            INNER JOIN procedures p ON p.procedure_id = dp.procedure_id 
            LEFT JOIN hopital_managers hm ON hm.hopitalmanager_id = h.hopital_id
            WHERE m.hopitalavis_hopital_id = ${parseInt(hopital_id)}
            ${filterCdt}
            GROUP BY m.hopitalavis_id
            ORDER BY m.hopitalavis_date DESC
        `;

        // Execute the SQL query
        const reviews = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

        // Return the result
        return res.status(200).json(reviews);
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        return res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
    }
});*/

//validée
router.get('/avisbyhopital/:id', async (req, res, next) => {
    try {
        const hopital_id = req.params.id;
        // Construire la requête SQL avec une variable $filterCdt
        let sql = `
 SELECT
            ha.hopitalavis_id,
            ha.hopitalavis_fullname,
            ha.hopitalavis_note,
            ha.hopitalavis_comment,
            ha.hopitalavis_date,
            ha.hopitalavis_lang,
            ha.hopitalavis_reply,
            ha.hopitalavis_country,
            ha.hopitalavis_commentfr,
            ha.hopitalavis_commenten,
            ha.hopitalavis_commentar,
            ha.hopitalavis_commentru,
            ha.hopitalavis_reply_fr,
            ha.hopitalavis_reply_en,
            ha.hopitalavis_reply_ar,
            ha.hopitalavis_reply_ru,
            ha.hopitalavis_service_rate,
            ha.hopitalavis_translator_rate,
            ha.hopitalavis_medecin_rate,
            ha.hopitalavis_commentes,
            ha.hopitalavis_reply_es,
            ha.hopitalavis_moyenne_rate
        FROM
            hopital_avis ha
        JOIN
            hopital h ON h.hopital_id = ha.hopitalavis_hopital_id
        WHERE
            h.hopital_id = ${parseInt(hopital_id)}                             
  `;
        // Exécution de la requête SQL
        const hopitalavis = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.status(200).json(hopitalavis);
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        return res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
    }
  });

module.exports = router;