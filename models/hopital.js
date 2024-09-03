module.exports = (Sequelize, Datatype) => {
    const Hopital = Sequelize.define("Hopital", {
        hopital_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        creator_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopital_name: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopital_logo: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_adress: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopital_city: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopital_cp: {
            type: Datatype.SMALLINT,
            allowNull: true
        },
        hopital_tel: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_fax: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_emailcontact: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_emaildemande1: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_emaildemande2: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_emaildemande3: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_dateexpiration: {
            type: Datatype.DATEONLY,
            allowNull: true
        },
        hopital_commission: {
            type: Datatype.FLOAT,
            allowNull: true
        },
        hopital_description: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopital_commissionNegociationMarge: {
            type: Datatype.FLOAT,
            allowNull: true
        },
        hopital_typecommission: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_typefacturation: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_enabled: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        hopital_activationend: {
            type: Datatype.DATEONLY,
            allowNull: true
        },
        hopital_supportfr: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_arabictranslator: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_openyear: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_nbrlits: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_frenshtranslator: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_courtedescription: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopital_top: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_onslider: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_appreciated: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_responsetime: {
            type: Datatype.INTEGER,
            allowNull: true,
            comment: 'Temps de réponse en minutes'
        },
        hopital_responseratio: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_sendfile: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_name_ar: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_commission_type: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_inassurance: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_boenabled: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_dispatchmode: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_addnightprice: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_intensivecareprice: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_prixconsultation: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_accepthiv: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        hopital_gbnote: {
            type: Datatype.FLOAT,
            allowNull: true
        },
        hopital_certificat: {
            type: Datatype.STRING,
            allowNull: true
        },
        affectation_geo: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        timestamps: false,
        tableName: 'hopital'
    });

    Hopital.associate = models => {
        Hopital.hasMany(models.Dossier_cliniques, {
          foreignKey: 'hopital_id',
          as: 'dossierCliniques'
        });
      };

      Hopital.associate = models => {
        Hopital.hasMany(models.Hopital_avis, {
        foreignKey: 'hopital_id',
          as: 'photosAvap'
        });
      };

    return Hopital;
}
