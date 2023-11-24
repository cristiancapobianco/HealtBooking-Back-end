const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Patient',{

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "Enter a valid email address",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true, // cuando este el mockup de las claves hecho pasar a true
            validate: {
              len: {
                args: [8, 15], // Mínimo 8 caracteres, máximo 15 
                msg: 'The password must have at least 8 characters.',
              },
              isAlphanumeric: {
                msg: 'The password must contain only letters and numbers.',
              },
              containsUppercase: {
                msg: 'The password must contain at least one uppercase letter.',
                args: ['(?=.*[A-Z])'],
              },
              containsNumber: {
                msg: 'The password must contain at least one number.',
                args: ['(?=.*[0-9])'],
              },
            },
          },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'active',
            validate: {
              isIn: {
                args: [['active', 'inactive']], 
                msg: 'The default value must by "active" or "inactive".',
              },
            },
          },
    })
}