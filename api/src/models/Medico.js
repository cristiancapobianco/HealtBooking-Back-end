const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Medico",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre:{
           type: DataTypes.STRING,
           allowNull: false, 
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail:{
                    msg: "Ingrese una dirección de correo electrónico válida",
                },
            },

        },
        foto:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}