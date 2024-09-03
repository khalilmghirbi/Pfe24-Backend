module.exports = (sequelize, DataTypes) => {
    const Procedure_video = sequelize.define('Procedure_video', {
        pv_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        pv_proc_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pv_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pv_lang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pv_alias: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pv_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pv_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        pv_last_update: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false,
        tableName: 'procedure_video'
    });

    return Procedure_video;
};
