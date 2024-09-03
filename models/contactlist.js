module.exports = (sequelize, DataTypes) => {
    const ContactList = sequelize.define('ContactList', {
        contactlist_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contactlist_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactlist_datetime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        contactlist_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactlist_nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactlist_prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactlist_responsable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        contactlist_ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactlist_remind: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'contactlist'
    });

    return ContactList;
};
