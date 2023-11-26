const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Appointment",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        date:{
            type: DataTypes.DATEONLY, //YYYY-MM-DD
            allowNull: false,
        },
        time:{
            type: DataTypes.TIME(4),
            allowNull: false
        },
        finalAmount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
}