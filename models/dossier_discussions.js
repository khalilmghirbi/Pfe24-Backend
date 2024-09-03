module.exports = (Sequelize, Datatype) => {
    const Dossier_discussions = Sequelize.define("Dossier_discussions", {
        discussion_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        discussion_hopital_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        discussion_dossier: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        
    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'dossier_discussions', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    return Dossier_discussions;
}
