module.exports = (sequelize, DataTypes) => {
    const Procedures_versions = sequelize.define('Procedures_versions', {
        id_version_article: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_redacteur: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        id_proc: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        lang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_creation: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        procedure_description: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_a_qui_sadresse: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_duree_traitement: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_risques: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_traitements_alternatifs: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_comment_ca_marche: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_conseils_avant: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_conseils_pendant: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        d_conseils_apres: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        recovery_time: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        success_rate: {
            type: DataTypes.TEXT,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: 'procedures_versions'
    });

    return Procedures_versions;
};
