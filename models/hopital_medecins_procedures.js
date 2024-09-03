module.exports = (Sequelize, DataTypes) => {
    const Hopital_medecins_procedures = Sequelize.define("Hopital_medecins_procedures", {
        id_medecin_procedure: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        procedure_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        medecin_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_medecins_procedures'
    });

    return Hopital_medecins_procedures;
};
