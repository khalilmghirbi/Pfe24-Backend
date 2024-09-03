module.exports = (Sequelize, DataTypes) => {
    const Issue = Sequelize.define("Issue", {
        issue_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        issue_title: {
            type: DataTypes.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        issue_message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        issue_file: {
            type: DataTypes.STRING,
            allowNull: true
        },
        issue_creationdate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        issue_creator: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        issue_supprime: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'issue'
    });

    return Issue;
};
