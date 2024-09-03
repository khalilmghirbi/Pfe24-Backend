module.exports = (sequelize, DataTypes) => {
    const Ville = sequelize.define('Ville', {
        ville_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        ville_nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ville_desc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ville_photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ville_maj: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ville_desc_en: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ville_desc_ar: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ville_desc_ru: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ville_intro_ar: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ville_intro_fr: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ville_intro_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ville_intro_ru: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ville_desc_es: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ville_intro_es: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'ville'
    });

    return Ville;
};
