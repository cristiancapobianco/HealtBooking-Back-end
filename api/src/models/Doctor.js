const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Doctor",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name:{
           type: DataTypes.STRING,
           allowNull: false, 
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
       email:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail:{
                    msg: "Enter a valid email address",
                },
            },
        },
        profilePicture:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}