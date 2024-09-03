module.exports = (sequelize, DataTypes) => {
    const Assurance = sequelize.define('Assurance', {
        assurance_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        assurance_client: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assurance_client_infos: {
            type: DataTypes.TEXT,
            allowNull: true,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        assurance_dateheure: {
            type: DataTypes.DATE,
            allowNull: false
        },
        assurance_dispatchdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        assurance_extra: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        assurance_statut: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assurance_choixpaiement: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assurance_expedie: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assurance_dateexpedition: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        assurance_file: {
            type: DataTypes.STRING,
            allowNull: true
        },
        assurance_montant: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dossier_ip: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'assurance'
    });

    return Assurance;
};
