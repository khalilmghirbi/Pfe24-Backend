module.exports = (Sequelize, DataTypes) => {
    const Hopital_procedures = Sequelize.define("Hopital_procedures", {
        hopital_procedure_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        procedures_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        procedures_price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedures_consultation_price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedures_price_currency: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_procedures'
    });

    return Hopital_procedures;
};
