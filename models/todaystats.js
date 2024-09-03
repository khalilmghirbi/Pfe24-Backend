module.exports = (sequelize, DataTypes) => {
    const TodayStats = sequelize.define('TodayStats', {
        stat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        stat_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        stat_proc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stat_parentproc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stat_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stat_lang: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'todaystats'
    });

    return TodayStats;
};
