module.exports = (Sequelize, Datatype) => {
    const Hopital_langue = Sequelize.define("Hopital_langue", {
        hopitallang_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hopitallang_hopital_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hopitallang_langId: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitallang_metatitle: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopitallang_metadesc: {
            type: Datatype.STRING,
            allowNull: false
        },
        hopitallang_shortdesc: {
            type: Datatype.TEXT,
            allowNull: false
        },
        hopitallang_desc: {
            type: Datatype.TEXT,
            allowNull: false
        },
        hopitallang_whychoosing: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopital_videouri: {
            type: Datatype.STRING,
            allowNull: true
        },
        hopital_noindextext: {
            type: Datatype.TEXT,
            allowNull: true
        },
        hopital_puburi: {
            type: Datatype.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'hopital_langue'
    });

    return Hopital_langue;
}
