module.exports = (sequelize, DataTypes) => {
    const Save_research = sequelize.define('Save_research', {
        res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        res_content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        res_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false,
        tableName: 'save_research'
    });

    return Save_research;
};
