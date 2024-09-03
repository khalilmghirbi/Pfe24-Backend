module.exports = (Sequelize, Datatype) => {
    const Dossier_rdv_relance = Sequelize.define("Dossier_rdv_relance", {
        dossier_relance_rdv_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        relance_rdv_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        relance_rdv_enddate: {
            type: Datatype.DATEONLY,
            allowNull: true
        },
        relance_rdv_status: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        relance_rdv_datecreation: {
            type: Datatype.DATE,
            allowNull: false
        },
        relance_rdv_price: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        relance_rdv_note: {
            type: Datatype.TEXT,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        relance_rdv_rate: {
            type: Datatype.DECIMAL,
            allowNull: false
        },
        relance_rdv_currency: {
            type: Datatype.STRING,
            allowNull: false
        },
        relance_rdv_shared: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        relance_comm_rate: {
            type: Datatype.DECIMAL,
            allowNull: false,
            defaultValue: 0.0
        },
        relance_medecin_rate: {
            type: Datatype.DECIMAL,
            allowNull: false,
            defaultValue: 0.0
        },
        relance_service_rate: {
            type: Datatype.DECIMAL,
            allowNull: false,
            defaultValue: 0.0
        },
        relance_translator_rate: {
            type: Datatype.DECIMAL,
            allowNull: false,
            defaultValue: 0.0
        },
        relance_dentaire: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        relance_moyenne_rate: {
            type: Datatype.DECIMAL,
            allowNull: false,
            defaultValue: 0.0
        }
    }, {
        timestamps: false,
        tableName: 'dossier_rdv_relance'
    });

    return Dossier_rdv_relance;
}
