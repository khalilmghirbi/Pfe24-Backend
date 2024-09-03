module.exports = (Sequelize, Datatype) => {
    const Dossier_cliniques = Sequelize.define("Dossier_cliniques", {
        dossier_clinique_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        status: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        dispatch_datetime: {
            type: Datatype.DATE,
            allowNull: false, // Change to false if 'user_pass' is required
            //defaultValue: 'default_password' // Provide a default value if needed
        },
        status_hopital: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        clinique_relancee: {
            type: Datatype.INTEGER,
            allowNull: true,
        },
        substatus: {
            type: Datatype.INTEGER,
            allowNull: true,
        },
        processed_by: {
            type: Datatype.STRING,
            allowNull: true,
        },
        dc_urgent: {
            type: Datatype.INTEGER,
            allowNull: true,
        },
        auto_dispatched: {
            type: Datatype.INTEGER,
            allowNull: true,
        },
    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'dossier_cliniques', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    Dossier_cliniques.associate = models => {
        Dossier_cliniques.belongsTo(models.Hopital, {
          foreignKey: 'hopital_id',
          as: 'hopital'
        });
      };

    Dossier_cliniques.associate = models => {
        Dossier_cliniques.hasMany(models.Hopital_avis, {
            foreignKey: 'hopitalavis_dossier',
            as: 'hopital_avis' // Assurez-vous que l'alias est correct
        });
    };

    return Dossier_cliniques;
}
