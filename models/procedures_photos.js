module.exports = (sequelize, DataTypes) => {
    const Procedures_photos = sequelize.define('Procedures_photos', {
        procphoto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        proc_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        procphoto_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        procphoto_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        procphoto_desc_fr: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        procphoto_desc_en: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        procphoto_desc_es: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        procphoto_desc_ar: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        procphoto_desc_ru: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        procphoto_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        procphoto_lang: {
            type: DataTypes.STRING,
            defaultValue: ' '
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 99
        }
    }, {
        timestamps: false,
        tableName: 'procedures_photos'
    });

    return Procedures_photos;
};
