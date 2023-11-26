require("dotenv").config();

const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/healthbooking`, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const {Appointment, Doctor,  Patient, Specialty, Sure,  } = sequelize.models;

// Aca vendrian las relaciones
Doctor.belongsToMany(Sure, { through: "DoctorSure" });
Sure.belongsToMany(Doctor, { through: "DoctorSure" });

Doctor.belongsToMany(Patient, {through: "DoctorPatient"});
Patient.belongsToMany(Doctor, {through: "DoctorPatient"})

Specialty.hasMany(Doctor, { foreignKey: 'SpecialtyId'});
Doctor.belongsTo(Specialty, { foreignKey: 'SpecialtyId'});


Appointment.belongsTo(Doctor, { foreignKey: 'doctorId'});
Doctor.hasMany(Appointment, { foreignKey: 'doctorId' })

Appointment.belongsTo(Patient, {foreignKey: 'patientId'});
Patient.hasMany(Appointment, { foreignKey: 'patientId' })

Sure.hasMany(Patient, {foreignKey: 'sureId'});
Patient.belongsTo(Sure, {foreignKey: "sureId"})



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
