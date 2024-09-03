module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define('Notes', {
        note_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        note_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        note_hospital: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'notes'
    });

    return Notes;
};
