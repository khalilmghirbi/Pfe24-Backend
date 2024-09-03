module.exports = (Sequelize, Datatype) => {
    const Extra_field_checkbox = Sequelize.define("Extra_field_checkbox", {
        extrafc_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        extrafc_field_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        extrafc_lang: {
            type: Datatype.STRING,
            allowNull: false
        },
        label_1: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: false
        },
        label_2: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: false
        },
        label_3: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        label_4: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'extra_field_checkbox'
    });

    return Extra_field_checkbox;
}
