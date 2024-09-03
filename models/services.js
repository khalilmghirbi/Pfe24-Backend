module.exports = (sequelize, DataTypes) => {
    const Services = sequelize.define('Services', {
        service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_name_en: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_name_ar: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        service_name_ru: {
            type: DataTypes.STRING,
            allowNull: false,
           // charset: 'utf8',
           // collate: 'utf8_unicode_ci'
        },
        service_icon_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_name_es: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'services'
    });

    return Services;
};
