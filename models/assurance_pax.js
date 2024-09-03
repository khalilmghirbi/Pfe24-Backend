module.exports = (sequelize, DataTypes) => {
    const Assurance_pax = sequelize.define('Assurance_pax', {
        asspax_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        asspax_ass_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        asspax_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asspax_nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asspax_prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asspax_datenaissance: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        asspax_isadult: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        asspax_isfumeur: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        asspax_taille: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        asspax_poid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        asspax_passport: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'assurance_pax'
    });

    return Assurance_pax;
};
