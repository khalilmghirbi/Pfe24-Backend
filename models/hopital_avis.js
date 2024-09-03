module.exports = (Sequelize, Datatype) => {
    const Hopital_avis = Sequelize.define("Hopital_avis", {
        hopitalavis_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hopitalavis_fullname: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitalavis_note: {
            type: Datatype.DECIMAL,
            allowNull: false
        },
        hopitalavis_comment: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitalavis_hopital_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopitalavis_dossier: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopitalavis_date: {
            type: Datatype.DATEONLY,
            allowNull: true
        },
        hopitalavis_lang: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitalavis_reply: {
            type: Datatype.TEXT,
            allowNull: false
        },
        hopitalavis_country: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitalavis_commentfr: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopitalavis_commenten: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopitalavis_commentar: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopitalavis_commentru: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopitalavis_reply_fr: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopitalavis_reply_en: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopitalavis_reply_ar: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopitalavis_reply_ru: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopitalavis_service_rate: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopitalavis_translator_rate: {
            type: Datatype.DECIMAL,
            allowNull: false,
            defaultValue: 0.0
        },
        hopitalavis_medecin_rate: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopitalavis_commentes: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopitalavis_reply_es: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopitalavis_moyenne_rate: {
            type: Datatype.FLOAT,
            allowNull: false
        }


    }, {
        timestamps: false,
        tableName: 'hopital_avis'
        
    });

    Hopital_avis.associate = models => {
        Hopital_avis.belongsTo(models.Dossier_cliniques, {
            foreignKey: 'hopitalavis_dossier',
            as: 'dossier_cliniques' // Assurez-vous que l'alias est correct
        });
        Hopital_avis.belongsTo(models.Hopital, {
            foreignKey: 'hopitalavis_hopital_id',
            as: 'hopital' // Assurez-vous que l'alias est correct
        });
    };

    return Hopital_avis;
}
