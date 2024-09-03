module.exports = (Sequelize, Datatype) => {
    const Dossier_quotations = Sequelize.define("Dossier_quotations", {
        quotation_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        quotation_hospital: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        quotation_date: {
            type: Datatype.DATE,
            allowNull: false
        },
        quotation_price: {
            type: Datatype.FLOAT,
            allowNull: false
        },
        quotation_hospitalisation: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        quotation_post_treatment: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        quotation_post_treatment_max: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        quotation_filepath: {
            type: Datatype.STRING(500),
            allowNull: false
        },
        quotation_message: {
            type: Datatype.TEXT,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_messagefr: {
            type: Datatype.TEXT,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_doctor: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        quotation_manager: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        quotation_doctorcv: {
            type: Datatype.TEXT,
            allowNull: false
        },
        quotation_status: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_currency: {
            type: Datatype.STRING,
            allowNull: false
        },
        quotation_transfertin: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_hotelin: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_transferthotelin: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_hotelbookingnights: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_hotelbooking: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_hotelbookingprice: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_read: {
            type: Datatype.DATE,
            allowNull: true
        },
        quotation_pricemax: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        quotation_signature: {
            type: Datatype.STRING,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_remind: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_services: {
            type: Datatype.STRING,
            allowNull: false
        },
        quotation_hotel: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        quotation_roomcapacity: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        quotation_mouthplan: {
            type: Datatype.STRING,
            allowNull: true
        },
        read_count: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        step_nb: {
            type: Datatype.TINYINT,
            allowNull: true
        },
        quotation_upperjawdesc_en: {
            type: Datatype.TEXT,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_upperjawdesc: {
            type: Datatype.TEXT,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_lowerjawdesc_en: {
            type: Datatype.TEXT,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_lowerjawdesc: {
            type: Datatype.TEXT,
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
            allowNull: true
        },
        quotation_airporthotelprice: {
            type: Datatype.FLOAT,
            allowNull: true
        },
        quotation_hotelhospitalprice: {
            type: Datatype.FLOAT,
            allowNull: true
        },
        quotation_remindj: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quotation_videolink: {
            type: Datatype.STRING(500),
            allowNull: true
        },
        quotation_transfertzoneincluded: {
            type: Datatype.STRING(200),
            allowNull: true
        },
        quotation_extra_hotel: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        quotation_initial: {
            type: Datatype.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'dossier_quotations'
    });

    Dossier_quotations.associate = models => {
        Dossier_quotations.hasMany(models.Quotation_photo_v2, {
          foreignKey: 'quotation_id',
          as: 'photos'
        });
      };

      Dossier_quotations.associate = models => {
        Dossier_quotations.hasMany(models.Quotation_step, {
          foreignKey: 'quotation_id',
          as: 'steps'
        });
      };

    return Dossier_quotations;
}
