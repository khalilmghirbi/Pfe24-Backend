module.exports = (sequelize, DataTypes) => {
    const Blog_quotation = sequelize.define('Blog_quotation', {
        blog_quotation_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false,
            //collate: 'utf8_unicode_ci'
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        tableName: 'blog_quotation'
    });

    Blog_quotation.associate = models => {
        Blog_quotation.belongsTo(models.User, { 
            foreignKey: 'user_id', 
            targetKey: 'id_user',
            as: 'user'
        });
    };

    return Blog_quotation;
};
