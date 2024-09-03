module.exports = (Sequelize, DataTypes) => {
    const Login_history_details = Sequelize.define("Login_history_details", {
        logind_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        logind_ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logind_dt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        logind_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logind_pass: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'login_history_details'
    });

    return Login_history_details;
};
