module.exports = (Sequelize, Datatype) => {
    const Docteur = Sequelize.define("Docteur", {
        docteur_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        docteur_alias: {
            type: Datatype.STRING,
            allowNull: true
        },
        docteur_title: {
            type: Datatype.STRING,
            allowNull: true
        },
        docteur_content: {
            type: Datatype.STRING,
            allowNull: false
        },
        docteur_seotitle: {
            type: Datatype.STRING,
            allowNull: false, // Change to false if 'user_pass' is required
            //defaultValue: 'default_password' // Provide a default value if needed
        },
        docteur_seodesc: {
            type: Datatype.STRING,
            allowNull: true
        },
        procedure_id: {
            type: Datatype.STRING,
            allowNull: true,
        },
        lang: {
            type: Datatype.STRING,
            allowNull: true,
        },
    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'docteur', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    return Docteur;
}
