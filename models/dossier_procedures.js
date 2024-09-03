module.exports = (Sequelize, Datatype) => {
    const Dossier_procedures = Sequelize.define("Dossier_procedures", {
        dossier_procedure_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        procedure_id: {
            type: Datatype.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'dossier_procedures'
    });

    return Dossier_procedures;
}
