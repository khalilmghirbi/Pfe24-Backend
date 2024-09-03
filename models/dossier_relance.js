module.exports = (Sequelize, Datatype) => {
    const Dossier_relance = Sequelize.define("Dossier_relance", {
        relance_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        relance_date: {
            type: Datatype.DATEONLY,
            allowNull: false
        },
        relance_status: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        relance_datecreation: {
            type: Datatype.DATE,
            allowNull: false
        },
        last_quotation_days: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        relance_note: {
            type: Datatype.TEXT,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        relance_updatedate: {
            type: Datatype.DATE,
            allowNull: true
        },
        relance_nomrappel: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        relance_rappel: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        relance_responsable: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        relance_pays: {
            type: Datatype.STRING,
            allowNull: true
        },
        relance_email: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        relance_phone: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        relance_lang: {
            type: Datatype.STRING,
            allowNull: true
        },
        relance_type: {
            type: Datatype.STRING,
            allowNull: false
        },
        relance_notif_ni: {
            type: Datatype.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'dossier_relance'
    });

    return Dossier_relance;
}
