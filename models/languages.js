module.exports = (Sequelize, DataTypes) => {
    const Languages = Sequelize.define("Languages", {
        lang_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lang_name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        lang_iso2: {
            type: DataTypes.STRING(5),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'languages'
    });

    return Languages;
};
