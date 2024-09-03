module.exports = (sequelize, DataTypes) => {
    const Procedures_faq = sequelize.define('Procedures_faq', {
        faq_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        faq_lang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faq_procedure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faq_rank: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faq_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faq_desc: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'procedures_faq'
    });

    return Procedures_faq;
};
