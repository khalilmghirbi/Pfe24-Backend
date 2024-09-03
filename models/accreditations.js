module.exports = (sequelize, DataTypes) => {
    const Accreditations = sequelize.define('Accreditations', {
        acc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        acc_name_en: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acc_name_ru: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acc_name_ar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acc_name_fr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acc_description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        acc_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        acc_link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        acc_name_es: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'accreditations'
    });

    return Accreditations;
};
