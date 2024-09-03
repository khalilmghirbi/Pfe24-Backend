module.exports = (sequelize, DataTypes) => {
    const Modules = sequelize.define('Modules', {
        module_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        module_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        module_uri: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'modules'
    });

    return Modules;
};
