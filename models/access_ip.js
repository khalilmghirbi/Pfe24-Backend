module.exports = (sequelize, DataTypes) => {
    const Access_ip = sequelize.define('Access_ip', {
        ip_adress: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        access_creation_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'access_ip'
    });

    return Access_ip;
};
