module.exports = (sequelize, DataTypes) => {
    const procedures_packages = sequelize.define('procedures_packages', {
        package_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        package_procedure: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        package_lang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        package_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        package_desc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        package_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        package_services: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'procedures_packages'
    });

    return procedures_packages;
};
