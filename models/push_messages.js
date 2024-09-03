module.exports = (sequelize, DataTypes) => {
    const Push_messages = sequelize.define('Push_messages', {
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        target_uri: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        tableName: 'push_messages'
    });


    Push_messages.associate = models => {
        Push_messages.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user'
        });
      };

    return Push_messages;
};
