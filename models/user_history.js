module.exports = (sequelize, DataTypes) => {
    const User_history = sequelize.define('User_history', {
        userhistory_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userhistory_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        userhistory_action: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userhistory_page: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userhistory_machine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userhistory_ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userhistory_location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'user_history'
    });

    User_history.associate = models => {
        User_history.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user'
        });
      };

    return User_history;
};
