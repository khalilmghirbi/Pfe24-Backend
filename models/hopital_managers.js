module.exports = (Sequelize, DataTypes) => {
    const Hopital_managers = Sequelize.define("Hopital_managers", {
        hopitalmanager_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hopitalmanager_fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hopitalmanager_phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hopitalmanager_email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hopitalmanager_photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hopitalmanager_countries: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        hopitalmanager_deleted: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'hopital_managers'
    });

    return Hopital_managers;
};
