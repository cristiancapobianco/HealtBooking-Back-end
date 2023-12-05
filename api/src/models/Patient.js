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
    height:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight:{
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
          msg: "Enter a valid email address",
        },
      },
    },
   rol:{
      type: DataTypes.STRING,
      defaultValue: "patient",
      allowNull: false
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
  },
    {
      timestamps: false
    });
};

//haciendo cambios al pedo a ver si puedo subier esto
