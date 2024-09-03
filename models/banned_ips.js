module.exports = (sequelize, DataTypes) => {
    const Banned_ips = sequelize.define('Banned_ips', {
        banip_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        banip_ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        banip_bandate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        banip_log: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'banned_ips'
    });

    return Banned_ips;
};
