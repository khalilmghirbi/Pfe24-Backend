module.exports = (Sequelize, Datatype) => {
    const Dossier_alerte_document = Sequelize.define("Dossier_alerte_document", {
        dossier_alerte_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        document_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        user_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        alerte_status: {
            type: Datatype.INTEGER,
            allowNull: true, // Change to false if 'user_pass' is required
            //defaultValue: 'default_password' // Provide a default value if needed
        },
    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'dossier_alerte_document', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    return Dossier_alerte_document;
}
