module.exports = (sequelize, DataTypes) => {
    const Accreditations_old = sequelize.define('Accreditations_old', {
        acc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        acc_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acc_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acc_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        acc_link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'accreditations_old'
    });

    return Accreditations_old;
};
