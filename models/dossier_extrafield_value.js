module.exports = (Sequelize, Datatype) => {
    const Dossier_extrafield_value = Sequelize.define("Dossier_extrafield_value", {
        id_dossier_extrafield_value: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_extra_field: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        id_dossier: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        type: {
            type: Datatype.STRING,
            allowNull: false
        },
        value: {
            type: Datatype.STRING,
            allowNull: false
        },
        value_en: {
            type: Datatype.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'dossier_extrafield_value',
        //charset: 'utf8mb4',
        //collate: 'utf8mb4_general_ci'
    });

    return Dossier_extrafield_value;
}
