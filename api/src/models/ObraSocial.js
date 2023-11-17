const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("ObraSocial",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}