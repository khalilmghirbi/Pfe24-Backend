module.exports = (Sequelize, DataTypes) => {
    const Login_history = Sequelize.define("Login_history", {
        login_history_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        login_history_ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login_history_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        logins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        deleted_at: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: 'login_history'
    });

    return Login_history;
};
