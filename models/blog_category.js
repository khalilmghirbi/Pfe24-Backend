module.exports = (sequelize, DataTypes) => {
    const Blog_category = sequelize.define('Blog_category', {
        blocat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_fr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_en: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_ar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_ru: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_es: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'blog_category'
    });

    return Blog_category;
};
