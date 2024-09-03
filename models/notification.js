module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
        notification_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        notification_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dossier_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notification_link: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        notification_title: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        notification_message: {
            type: DataTypes.TEXT,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        notification_supprime: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        proc_id: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        notif_type: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        blog_id: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        hopital_id: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        lang_edit: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: 'notification'
    });

    return Notification;
};
