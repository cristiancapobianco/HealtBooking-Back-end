const { Router } = require('express')
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { getAppointmentByDoctor } = require('../controllers/getAppointmentByDoctor');
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');
const { changeHistory } = require('../controllers/clinicalHistory');
const { getAppointmentById } = require('../controllers/getAppointmentById');
const { updateAppointment } = require('../controllers/updateAppointment');
const { getPatientById } = require('../controllers/getPatientById');

const doctorRouter = Router();

// URl_Base + /doctor/

doctorRouter.get('/appointment/:idDoctor', getAppointmentByDoctor)  //busca todas las citas por el id del doctor

doctorRouter.get('/specialty', getSpecialty); //todas las especialidades

doctorRouter.get('/sure', getSure); //todas las obras sociales

doctorRouter.get('/', getAllDoctors) //muestra todos los doctores

doctorRouter.patch('/clinicalHistory', changeHistory) //cambia historial clinico

doctorRouter.get('/appointmentById/:idAppointment', getAppointmentById) //muestra una cita por id

doctorRouter.patch('/updateAppointment/:idAppointment', updateAppointment) // hace update a una cita

doctorRouter.get('/patient/:idPatient', getPatientById) //busca todos los datos del paciente

module.exports = doctorRouter
