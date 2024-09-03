module.exports = (sequelize, DataTypes) => {
    const Params = sequelize.define('Params', {
        param_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        param_name: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_general_ci'
        },
        param_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'params'
    });

    return Params;
};
