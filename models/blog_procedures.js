module.exports = (sequelize, DataTypes) => {
    const Blog_procedures = sequelize.define('Blog_procedures', {
        blog_proc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        proc_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'blog_procedures'
    });

    return Blog_procedures;
};
