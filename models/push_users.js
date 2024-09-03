module.exports = (sequelize, DataTypes) => {
    const Push_users = sequelize.define('Push_users', {
        pushuser_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        auth: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        p256dh: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        endpoint: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        subscription_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'push_users'
    });

    Push_users.associate = models => {
        Push_users.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user'
        });
      };
    

    return Push_users;
};
