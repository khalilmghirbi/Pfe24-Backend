module.exports = (sequelize, DataTypes) => {
    const Campagnes = sequelize.define('Campagnes', {
        campagn_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        campagn_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        campagn_subject: {
            type: DataTypes.STRING,
            allowNull: false,
            //collate: 'utf8_unicode_ci'
        },
        campagn_content: {
            type: DataTypes.TEXT,
            allowNull: false,
            //collate: 'utf8mb4_unicode_ci'
        },
        campagn_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        timestamps: false,
        tableName: 'campagnes'
    });

    Campagnes.associate = models => {
        Campagnes.hasMany(models.Campagns_mailing, {
            foreignKey: 'campagn_id',
            sourceKey: 'campagn_id',
            as: 'mailings'
        });
    };


    return Campagnes;
};
