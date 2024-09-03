module.exports = (sequelize, DataTypes) => {
    const Procedures_seo = sequelize.define('Procedures_seo', {
        pseo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        pseo_procedure_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pseo_lang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meta_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meta_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meta_keywords: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        procedure_h1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        d_a_qui_sadresse: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_duree_traitement: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_risques: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_traitements_alternatifs: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_comment_ca_marche: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_conseils_avant: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_conseils_pendant: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        d_conseils_apres: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        recovery_time: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        success_rate: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        procedure_synonymes: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        procedure_semantique: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        procedure_videolink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        incoming_links: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        tableau_comparatif: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        avis_video: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        pseo_maj: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: 'procedures_seo'
    });

    return Procedures_seo;
};
