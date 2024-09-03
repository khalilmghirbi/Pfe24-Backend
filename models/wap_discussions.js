module.exports = (sequelize, DataTypes) => {
    const Wap_discussions = sequelize.define('Wap_discussions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        other_side: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        payload: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        context_data: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        test_data: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: false
        },
        media: {
            type: DataTypes.STRING,
            allowNull: true
        },
        media_file_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        error_log: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        message_datetime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        api_response: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        message_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        msg_error: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        emoji_unicode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        read_date_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        delivered_date_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        is_read: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        text_encoded: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'wap_discussions'
    });

    return Wap_discussions;
};
