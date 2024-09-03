module.exports = (sequelize, DataTypes) => {
    const Users_procedures = sequelize.define('Users_procedures', {
        userproc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        proc_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        proc_lang: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'users_procedures'
    });

    return Users_procedures;
};
