module.exports = (Sequelize, Datatype) => {
    const Extra_fields = Sequelize.define("Extra_fields", {
        id_extra_field: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_proc: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        type_extra_field: {
            type: Datatype.STRING,
            allowNull: false
        },
        label_fr: {
            type: Datatype.STRING,
            allowNull: false
        },
        label_en: {
            type: Datatype.STRING,
            allowNull: false
        },
        label_ru: {
            type: Datatype.STRING,
            allowNull: false
        },
        label_ar: {
            type: Datatype.STRING,
            allowNull: false
        },
        label_checkbox_1: {
            type: Datatype.STRING,
            allowNull: true
        },
        label_checkbox_2: {
            type: Datatype.STRING,
            allowNull: true
        },
        label_checkbox_3: {
            type: Datatype.STRING,
            allowNull: true
        },
        label_checkbox_4: {
            type: Datatype.STRING,
            allowNull: true
        },
        extra_order: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 99
        },
        label_es: {
            type: Datatype.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'extra_fields'
    });

    return Extra_fields;
}
