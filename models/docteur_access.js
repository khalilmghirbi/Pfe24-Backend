module.exports = (Sequelize, Datatype) => {
    const Docteur_access = Sequelize.define("Docteur_access", {
        docteuraccess_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        docteuraccess_createdby: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        docteuraccess_datecreation: {
            type: Datatype.DATE,
            allowNull: true
        },
        docteuraccess_token: {
            type: Datatype.STRING,
            allowNull: true
        },
        docteuraccess_dossier: {
            type: Datatype.INTEGER,
            allowNull: true, // Change to false if 'user_pass' is required
            //defaultValue: 'default_password' // Provide a default value if needed
        },
        docteuraccess_readdate: {
            type: Datatype.DATE,
            allowNull: true
        },

    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'docteur_access', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    Docteur_access.associate = models => {
        Docteur_access.belongsTo(models.Dossier, {
          foreignKey: 'docteuraccess_dossier',
          as: 'dossier'
        });
    
        Docteur_access.belongsTo(models.User, {
          foreignKey: 'docteuraccess_createdby',
          as: 'createdBy'
        });
      };

    return Docteur_access;
}
