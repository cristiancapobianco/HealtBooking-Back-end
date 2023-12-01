const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Appointment", {
        id: {
            type: DataTypes.UUID,
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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending",
            validate: {
                isIn: {
                    args: [["pending", "paid"]]
                },
            },
        },
    })
}