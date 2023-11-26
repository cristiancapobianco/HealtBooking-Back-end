const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Patient", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      validate: {
        len: {
          args: [8, 8],
          msg: "The ID must have exactly 8 digits.",
        },
      },
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
      allowNull: true,
      validate: {
        len: {
          args: [8, 15],
          msg: "The password must have at least 8 characters.",
        },
        isAlphanumeric: {
          msg: "The password must contain only letters and numbers.",
        },
        customValidation(value) {
          
          if (!/[A-Z]/.test(value)) {
            throw new Error("La contraseña debe contener al menos una letra mayúscula.");
          }
          
          if (!/\d/.test(value)) {
            throw new Error("La contraseña debe contener al menos un número.");
          }
        },
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
      validate: {
        isIn: {
          args: [["active", "inactive"]],
          msg: 'The default value must by "active" or "inactive".',
        },
      },
    },
  });
};
