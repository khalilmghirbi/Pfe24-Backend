module.exports = (Sequelize, Datatype) => {
    const Dossier_rdv = Sequelize.define("Dossier_rdv", {
        rdv_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rdv_datetime: {
            type: Datatype.DATE,
            allowNull: false
        },
        rdv_dossier_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopital_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        rdv_confirmed: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        rdv_transfert: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        rdv_hotel: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        rdv_confirm_piece: {
            type: Datatype.STRING,
            //charset: 'utf8mb4',
            //collate: 'utf8mb4_unicode_ci',
            allowNull: true
        },
        rdv_passerport: {
            type: Datatype.STRING,
            allowNull: false
        },
        rdv_billet: {
            type: Datatype.STRING,
            allowNull: false
        },
        rdv_last_intervenant: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        rdv_message: {
            type: Datatype.TEXT,
            allowNull: true
        },
        rdv_messageen: {
            type: Datatype.TEXT,
            allowNull: true
        },
        rdv_accompagnateur: {
            type: Datatype.STRING,
            allowNull: false
        },
        rdv_accompagnateur_phone: {
            type: Datatype.STRING,
            allowNull: false
        },
        rdv_returndate: {
            type: Datatype.DATEONLY,
            allowNull: true
        },
        rdv_arrivaldate: {
            type: Datatype.DATEONLY,
            allowNull: true
        },
        rdv_nomhotel: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        rdv_adressehotel: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        rdv_pickup: {
            type: Datatype.TIME,
            allowNull: true
        },
        rdv_protocolid: {
            type: Datatype.STRING,
            allowNull: true
        },
        rdv_cancelcause: {
            type: Datatype.STRING,
            allowNull: true
        },
        rdv_doctor: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        rdv_quotation_id: {
            type: Datatype.INTEGER,
            defaultValue: 0
        },
        rdv_type: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        rdv_paid: {
            type: Datatype.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'dossier_rdv'
    });

    return Dossier_rdv;
}
