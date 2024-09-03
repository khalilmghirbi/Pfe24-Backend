module.exports = (sequelize, DataTypes) => {
    const Devise_conversion = sequelize.define('Devise_conversion', {
        conversion_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        conversion_from: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conversion_to: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conversion_ratio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        conversion_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'devise_conversion'
    });

    return Devise_conversion;
};
