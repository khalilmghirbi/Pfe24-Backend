module.exports = (sequelize, DataTypes) => {
    const Procedures_namessages = sequelize.define('Procedures_namessages', {
        namessage_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        namessage_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        namessage_procedure: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        namessage_lang: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'procedures_namessages'
    });

    return Procedures_namessages;
};
