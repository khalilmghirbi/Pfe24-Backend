module.exports = (sequelize, DataTypes) => {
    const Currencies = sequelize.define('Currencies', {
        devise_code: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        devise_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        devise_name_en: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devise_name_ar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devise_symbole: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devise_visible: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'currencies'
    });

    return Currencies;
};
