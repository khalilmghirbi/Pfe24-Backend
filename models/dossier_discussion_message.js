module.exports = (Sequelize, Datatype) => {
    const Dossier_discussion_message = Sequelize.define("Dossier_discussion_message", {
        discussion_message_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        discussion_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        discussion_intervenant: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        discussion_datecreation: {
            type: Datatype.DATE,
            allowNull: false
        },
        discussion_comment: {
            type: Datatype.TEXT,
            allowNull: true
        },
        discussion_commenten: {
            type: Datatype.TEXT,
            allowNull: true
        },
        discussion_translated: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        discussion_document_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hospital_read: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        patient_read: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        discussion_readdate: {
            type: Datatype.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'dossier_discussion_message',
    });

    return Dossier_discussion_message;
}
