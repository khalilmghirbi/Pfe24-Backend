module.exports = (sequelize, DataTypes) => {
    const Procedures_nimessages = sequelize.define('Procedures_nimessages', {
        nimessage_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nimessage_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nimessage_procedure: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nimessage_lang: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'procedures_nimessages'
    });

    return Procedures_nimessages;
};
