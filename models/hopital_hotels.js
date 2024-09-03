module.exports = (Sequelize, Datatype) => {
    const Hopital_hotels = Sequelize.define("Hopital_hotels", {
        hotel_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hotel_hopitalid: {
            type: Datatype.INTEGER,
            allowNull: true,
            defaultValue: '1'
        },
        hotel_name: {
            type: Datatype.STRING,
            allowNull: false
        },
        hotel_stars: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hotel_link: {
            type: Datatype.STRING,
            allowNull: false
        },
        hotel_singleroom: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hotel_doubleroom: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        hotel_address: {
            type: Datatype.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'hopital_hotels'
    });

    return Hopital_hotels;
}
