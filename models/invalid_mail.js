module.exports = (Sequelize, DataTypes) => {
    const Invalid_mail = Sequelize.define("Invalid_mail", {
        mail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mail_from: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mail_subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mail_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        mail_datetime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        mail_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mail_datetreatment: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'invalid_mail'
    });

    return Invalid_mail;
};
