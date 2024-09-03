module.exports = (Sequelize, Datatype) => {
    const Hopital_langues = Sequelize.define("Hopital_langues", {
        hopital_langue_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lang_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopital_id: {
            type: Datatype.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_langues'
    });

    return Hopital_langues;
}
