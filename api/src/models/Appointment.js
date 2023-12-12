const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Appointment", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            // autoIncrement: true
            // allowNull: true,
        },
        date: {
            type: DataTypes.DATEONLY, //YYYY-MM-DD
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME(4),
            allowNull: false
        },
        // idPatient: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,

        // },
        // idDoctor: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,

        // },
        finalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paymentDay: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pendiente",
            validate: {
                isIn: {
                    args: [["pendiente", "pago"]]
                },
            },
        },
    })
}