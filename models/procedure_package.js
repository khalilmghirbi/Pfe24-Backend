module.exports = (sequelize, DataTypes) => {
    const Procedure_package = sequelize.define('Procedure_package', {
        procedure_package_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        procedure_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nbnuits: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        package_description_fr: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        package_description_en: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        package_description_ar: {
            type: DataTypes.TEXT,
            defaultValue: null,
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        },
        package_prix_euro: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'procedure_package'
    });

    return Procedure_package;
};
