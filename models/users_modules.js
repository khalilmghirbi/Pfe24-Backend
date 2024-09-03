module.exports = (sequelize, DataTypes) => {
    const Users_modules = sequelize.define('Users_modules', {
        usermod_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        module_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'users_modules'
    });

    return Users_modules;
};
