const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Patient", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      validate: {
        len: {
          args: [8, 8],
          msg: "El id debe tener exactamente 8 numeros.",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Ingrese un email valido",
        },
      },
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "patient",
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "activo",
      validate: {
        isIn: {
          args: [["activo", "inactivo"]],
          msg: 'The default value must by "activo" or "inactivo".',
        },
      },
    },
    history: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

//haciendo cambios al pedo a ver si puedo subier esto
