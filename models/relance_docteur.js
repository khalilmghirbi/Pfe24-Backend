module.exports = (sequelize, DataTypes) => {
    const Relance_docteur = sequelize.define('Relance_docteur', {
        relance_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        partner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        relance_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        relance_status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        relance_datecreation: {
            type: DataTypes.DATE,
            allowNull: false
        },
        relance_note: {
            type: DataTypes.TEXT,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: 'relance_docteur'
    });

    return Relance_docteur;
};
