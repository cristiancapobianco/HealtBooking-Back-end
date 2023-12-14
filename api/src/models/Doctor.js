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

        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        rol: {
            type: DataTypes.STRING,
            defaultValue: 'doctor',
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'activo',
            validate: {
                isIn: {
                    args: [['activo', 'inactivo']],
                    msg: 'The default value must by "activo" or "inactivo".',
                },
            },
        },
        reviews: {
            type: DataTypes.JSON,
            defaultValue: {
                count: 0,
                acum: 0,
                average: 0
            }
        }
    }, {
        timestamps: false
    })

}