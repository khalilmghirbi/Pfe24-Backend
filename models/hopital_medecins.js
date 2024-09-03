module.exports = (Sequelize, DataTypes) => {
    const Hopital_medecins = Sequelize.define("Hopital_medecins", {
        hopitalmedecins_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            //allowNull: false
            allowNull: true

        },
        hopitalmedecins_fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        hopitalmedecins_phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hopitalmedecins_description: {
            type: DataTypes.TEXT,
            allowNull: true,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        hopitalmedecins_photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hopitalmedecins_langs: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hopitalmedecins_status: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 1
        },
        hopitalmedecins_cvfile: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'hopital_medecins'
    });

    return Hopital_medecins;
};
