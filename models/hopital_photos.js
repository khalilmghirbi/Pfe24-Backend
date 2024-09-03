module.exports = (Sequelize, DataTypes) => {
    const Hopital_photos = Sequelize.define("Hopital_photos", {
        hopital_photos_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_lang: {
            type: DataTypes.STRING,
            allowNull: true
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_photos'
    });

    return Hopital_photos;
};
