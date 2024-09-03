module.exports = (sequelize, DataTypes) => {
    const Cms_avis = sequelize.define('Cms_avis', {
        avis_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        avis_nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avis_pays: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avis_note: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        avis_comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avis_dateajout: {
            type: DataTypes.DATE,
            allowNull: false
        },
        avis_datemaj: {
            type: DataTypes.DATE,
            allowNull: false
        },
        avis_lang: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'cms_avis'
    });

    return Cms_avis;
};
