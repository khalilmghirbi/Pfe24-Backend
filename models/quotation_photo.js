module.exports = (sequelize, DataTypes) => {
    const Quotation_photo = sequelize.define('Quotation_photo', {
        quotationtof_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quotationtof_path: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        quotationtof_hopital: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quotationtof_quotation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quotationtof_datecreation: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false,
        tableName: 'quotation_photo'
    });

    return Quotation_photo;
};
