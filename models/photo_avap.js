module.exports = (sequelize, DataTypes) => {
    const Photo_avap = sequelize.define('Photo_avap', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        photo_path: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        procedure_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'photo_avap'
    });


    Photo_avap.associate = models => {
        Photo_avap.belongsTo(models.Procedures, {
          foreignKey: 'procedure_id',
          as: 'procedure'
        });
        Photo_avap.belongsTo(models.Hopital, {
          foreignKey: 'hopital_id',
          as: 'hopital'
        });
      };

      Photo_avap.associate = models => {
        Photo_avap.hasMany(models.Quotation_photo_v2, {
          foreignKey: 'photo_id',
          as: 'quotations'
        });
      };

    return Photo_avap;
};
