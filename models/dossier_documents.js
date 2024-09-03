module.exports = (Sequelize, Datatype) => {
    const Dossier_documents = Sequelize.define("Dossier_documents", {
        dossier_documents_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        document_name_del: {
            type: Datatype.STRING,
            allowNull: true
        },
        document_path_del: {
            type: Datatype.STRING,
            allowNull: true
        },
        document_name: {
            type: Datatype.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        document_path: {
            type: Datatype.STRING,
            allowNull: false,
            //charset: 'utf8',
            //collate: 'utf8_unicode_ci'
        },
        document_mimetype: {
            type: Datatype.STRING,
            allowNull: false
        },
        document_taille: {
            type: Datatype.INTEGER,
            allowNull: true,
           // comment: 'taille en Ko'
        },
        dossier_uniqId: {
            type: Datatype.STRING,
            allowNull: false
        },
        dossier_id: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        document_extract: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        document_shared: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        isTchatDocument: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        creationDate: {
            type: Datatype.DATE,
            allowNull: true
        },
        document_status: {
            type: Datatype.INTEGER,
            defaultValue: 0
        },
        document_patient: {
            type: Datatype.INTEGER,
            defaultValue: 0
        },
        document_crypte: {
            type: Datatype.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        crypt_password: {
            type: Datatype.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'dossier_documents',
    });

    return Dossier_documents;
}
