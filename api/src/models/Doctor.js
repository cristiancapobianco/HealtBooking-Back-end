const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Doctor", {
        id: {
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
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        price:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        rol:{
          type:DataTypes.STRING,
          allowNull: false,
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
    }, {
        timestamps: false
    })

}