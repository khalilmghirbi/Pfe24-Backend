module.exports = (sequelize, DataTypes) => {
    const Souscription = sequelize.define('Souscription', {
        souscription_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        souscription_fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_specialite: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_secteur: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_pays: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_ville: {
            type: DataTypes.STRING,
            allowNull: false
        },
        souscription_adresse: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'souscription'
    });

    return Souscription;
};
