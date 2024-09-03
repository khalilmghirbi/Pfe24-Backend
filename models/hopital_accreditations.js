module.exports = (Sequelize, Datatype) => {
    const Hopital_accreditations = Sequelize.define("Hopital_accreditations", {
        hopital_accreditation_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        accreditations_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopital_id: {
            type: Datatype.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_accreditations'
    });

    return Hopital_accreditations;
}
