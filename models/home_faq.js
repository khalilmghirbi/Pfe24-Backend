module.exports = (Sequelize, Datatype) => {
    const Home_faq = Sequelize.define("Home_faq", {
        faq_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        faq_lang: {
            type: Datatype.STRING,
            allowNull: false
        },
        faq_rank: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        faq_name: {
            type: Datatype.STRING,
            allowNull: false
        },
        faq_desc: {
            type: Datatype.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'home_faq'
    });

    return Home_faq;
}
