module.exports = (sequelize, DataTypes) => {
    const Campagns_mailing = sequelize.define('Campagns_mailing', {
        cm_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        campagn_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Campagnes', // Assurez-vous que le modèle `Campagnes` est correctement défini
                key: 'campagn_id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_mail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sending_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: 'campagns_mailing'
    });

    Campagns_mailing.associate = models => {
        Campagns_mailing.belongsTo(models.Campagnes, { 
            foreignKey: 'campagn_id', 
            targetKey: 'campagn_id',
            as: 'campagne'
        });

        Campagns_mailing.belongsTo(models.User, { 
            foreignKey: 'user_id', 
            targetKey: 'id_user',
            as: 'user'
        });
    };

    return Campagns_mailing;
};
