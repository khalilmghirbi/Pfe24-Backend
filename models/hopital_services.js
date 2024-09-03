module.exports = (Sequelize, DataTypes) => {
    const Hopital_services = Sequelize.define("Hopital_services", {
        hopital_service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_services'
    });

    return Hopital_services;
};
