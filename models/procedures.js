module.exports = (sequelize, DataTypes) => {
    const Procedures = sequelize.define('Procedures', {
        procedure_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        procedure_parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_name: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_nameen: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_description: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ''
        },
        procedure_photo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_mainmenu: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_maj: {
            type: DataTypes.DATE,
            allowNull: true
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_name_fr: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_name_en: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_description_fr: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ''
        },
        procedure_description_en: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ''
        },
        procedure_name_ar: {
            type: DataTypes.STRING,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        procedure_description_ar: {
            type: DataTypes.TEXT,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        procedure_prixappel: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_prixpromo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_withgarantee: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_avgquoteprice: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        procedure_name_ru: {
            type: DataTypes.STRING,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        procedure_description_ru: {
            type: DataTypes.TEXT,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        procedure_tag: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_minmax: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        alias_fr: {
            type: DataTypes.STRING,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        alias_en: {
            type: DataTypes.STRING,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        alias_ar: {
            type: DataTypes.STRING,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        alias_ru: {
            type: DataTypes.STRING,
            charset: 'utf32',
            collate: 'utf32_unicode_ci',
            allowNull: true,
            defaultValue: ''
        },
        procedure_name_es: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        procedure_description_es: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ''
        },
        alias_es: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        }
    }, {
        timestamps: false,
        tableName: 'procedures',
        comment: 'Liste des procédures'
    });


    Procedures.associate = models => {
        Procedures.hasMany(models.Photo_avap, {
          foreignKey: 'procedure_id',
          as: 'photosAvap'
        });
      };

    return Procedures;
};
