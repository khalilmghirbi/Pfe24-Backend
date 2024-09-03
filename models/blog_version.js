module.exports = (sequelize, DataTypes) => {
    const Blog_version = sequelize.define('Blog_version', {
        id_blog_version: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_redacteur: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_blog: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lang: {
            type: DataTypes.STRING,
            allowNull: false,
            //collate: 'utf8_general_ci'
        },
        date_creation: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
        blog_content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'blog_version'
    });

    return Blog_version;
};
