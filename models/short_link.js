module.exports = (sequelize, DataTypes) => {
    const Short_link = sequelize.define('Short_link', {
        sl_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        sl_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sl_redirect: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'short_link'
    });

    return Short_link;
};
