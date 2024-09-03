module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        client_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_telephone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_sexe: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_age: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        client_taille: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        client_poid: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        client_birthdate: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        client_smoker: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'client'
    });

    return Client;
};
