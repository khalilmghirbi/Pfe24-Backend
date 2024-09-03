module.exports = (Sequelize, Datatype) => {
    const Hopital_contacts = Sequelize.define("Hopital_contacts", {
        hopitalcontacts_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hopital_id: {
            type: Datatype.INTEGER,
            allowNull: true,
             defaultValue: '1'
        },
        hopitalcontacts_fullname: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitalcontacts_phone: {
            type: Datatype.STRING,
            allowNull: true,
            defaultValue: '70200200'
        },
        hopitalcontacts_email: {
            type: Datatype.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_contacts'
    });

    return Hopital_contacts;
}
