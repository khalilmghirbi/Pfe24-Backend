module.exports = (Sequelize, Datatype) => {
    const Dossier_history = Sequelize.define("Dossier_history", {
        historique_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        historique_type: {
            type: Datatype.STRING,
            allowNull: false
        },
        historique_destination: {
            type: Datatype.STRING,
            allowNull: false
        },
        historique_datetime: {
            type: Datatype.DATE,
            allowNull: false
        },
        historique_subject: {
            type: Datatype.STRING,
            allowNull: false
        },
        historique_message: {
            type: Datatype.TEXT,
            allowNull: false
        },
        historique_status: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        historique_patientmessage: {
            type: Datatype.TEXT,
            allowNull: false,
            defaultValue: ' '
        },
        historique_sent: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        historique_bcc: {
            type: Datatype.STRING,
            allowNull: true
        },
        historique_replyto: {
            type: Datatype.STRING,
            allowNull: true
        },
        historique_cc: {
            type: Datatype.STRING,
            allowNull: true
        },
        historique_from: {
            type: Datatype.INTEGER,
            defaultValue: 0
        },
        historique_sent_datetime: {
            type: Datatype.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'dossier_history',
        //charset: 'utf8mb4',
        //collate: 'utf8mb4_general_ci'
    });

    return Dossier_history;
}
