module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        blog_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        blog_author: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blog_category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blog_alias: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_seotitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        blog_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        blog_seodesc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_creation: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        blog_lang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_keyword: {
            type: DataTypes.STRING,
            allowNull: true
        },
        blog_synonymes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        blog_semantique: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'blog'
    });

    return Blog;
};
