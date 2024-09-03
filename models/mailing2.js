module.exports = (sequelize, DataTypes) => {
    const Mailing2 = sequelize.define('Mailing2', {
        mail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mail_adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mail_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mail_senddate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        mail_enabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        timestamps: false,
        tableName: 'mailing2'
    });

    return Mailing2;
};
