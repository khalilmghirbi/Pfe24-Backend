module.exports = (sequelize, DataTypes) => {
    const Quote_incompleted = sequelize.define('Quote_incompleted', {
        qi_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        qi_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        qi_mail: {
            type: DataTypes.STRING(200),
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: false
        },
        qi_phone: {
            type: DataTypes.STRING(200),
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: false
        },
        qi_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        qi_ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qi_lang: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'quote_incompleted'
    });

    return Quote_incompleted;
};
