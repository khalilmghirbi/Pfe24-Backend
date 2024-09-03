module.exports = (sequelize, DataTypes) => {
    const Quotation_photo_v2 = sequelize.define('Quotation_photo_v2', {
        quotationph_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quotation_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'quotation_photo_v2'
    });

    Quotation_photo_v2.associate = models => {
        Quotation_photo_v2.belongsTo(models.Dossier_quotations, {
          foreignKey: 'quotation_id',
          as: 'quotation'
        });
    
        Quotation_photo_v2.belongsTo(models.Photo_avap, {
          foreignKey: 'photo_id',
          as: 'photo'
        });
      };

    return Quotation_photo_v2;
};
