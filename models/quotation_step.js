module.exports = (sequelize, DataTypes) => {
    const Quotation_step = sequelize.define('Quotation_step', {
        quotation_step_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        step_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stay_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        step_timebetween_en: {
            type: DataTypes.TEXT,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            defaultValue: null
        },
        step_timebetween: {
            type: DataTypes.TEXT,
           // charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            defaultValue: null
        },
        quotation_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'quotation_step'
    });

    Quotation_step.associate = models => {
        Quotation_step.belongsTo(models.Dossier_quotations, {
          foreignKey: 'quotation_id',
          as: 'quotation'
        });
      };

    return Quotation_step;
};
