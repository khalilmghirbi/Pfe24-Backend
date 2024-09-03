module.exports = (Sequelize, Datatype) => {
    const Dossier = Sequelize.define("Dossier", {
        dossier_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_datecreation: {
            type: Datatype.DATE,
            allowNull: false
        },
        dossier_client: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_message: {
            type: Datatype.TEXT,
            allowNull: false
        },
        dossier_messageen: {
            type: Datatype.TEXT,
            allowNull: false, // Change to false if 'user_pass' is required
            //defaultValue: 'default_password' // Provide a default value if needed
        },
        dossier_situation: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_periode: {
            type: Datatype.STRING,
            allowNull: true,
            defaultValue: 'default_password' // Provide a default value if needed
        },
        dossier_uniqId: {
            type: Datatype.STRING,
            allowNull: true,
            defaultValue: 'default_password' // Provide a default value if needed
        },
        dossier_status: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_destination: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_rdv: {
            type: Datatype.DATE,
            allowNull: true
        },
        dossier_paiement: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_partnerid: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_consultation: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_supprime: {
            type: Datatype.DATE,
            allowNull: true
        },
        dossier_ip: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_userinterested: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_paiementfraix: {
            type: Datatype.TEXT,
            allowNull: true
        },
        dossier_extrainfos: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_archived: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_commissionpaye: {
            type: Datatype.TEXT,
            allowNull: true
        },
        dossier_montantcom: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_montantcomdevise: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_responsable: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_affectation: {
            type: Datatype.DATE,
            allowNull: true
        },
        dossier_datepaiementfraix: {
            type: Datatype.DATE,
            allowNull: true
        },
        dossier_noteinterne: {
            type: Datatype.TEXT,
            allowNull: true
        },
        dossier_paiementmethod: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_paiementreceipt: {
            type: Datatype.STRING,
            allowNull: true
        },
        viber_remind: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_available: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_niremind: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_montantcomdevise2: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_montantcomdevise3: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_montantcom2: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_montantcom3: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_source_infos: {
            type: Datatype.TEXT,
            allowNull: true
        },
        traffic_source: {
            type: Datatype.STRING,
            allowNull: true
        },
        traffic_referer: {
            type: Datatype.STRING,
            allowNull: true
        },
        dossier_creator: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        dossier_priority: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        stop_sale: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        
    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'dossier', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    Dossier.associate = models => {
        Dossier.hasMany(models.Docteur_access, {
          foreignKey: 'docteuraccess_dossier',
          as: 'docteurAccess'
        });
      };

    return Dossier;
}
