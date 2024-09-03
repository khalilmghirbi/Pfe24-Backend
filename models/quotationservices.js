module.exports = (sequelize, DataTypes) => {
    const Quotationservices = sequelize.define('Quotationservices', {
        quotationservice_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quotationservice_order: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 99
        },
        quotationservice_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quotationservice_name_en: {
            type: DataTypes.STRING,
            allowNull: false,
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        },
        quotationservice_name_ar: {
            type: DataTypes.STRING,
            allowNull: false,
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        },
        quotationservice_name_ru: {
            type: DataTypes.STRING,
            allowNull: false,
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        },
        quotationservice_icon_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quotationservice_hoenabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotationservice_name_es: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'quotationservices'
    });

    return Quotationservices;
};
