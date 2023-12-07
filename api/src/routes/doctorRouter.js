const {Router}= require('express')
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { getAppointmentByDoctor } = require('../controllers/getAppointmentByDoctor');
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');

const doctorRouter=Router();

// URl_Base + /doctor/

doctorRouter.get('/appointment/:idDoctor', getAppointmentByDoctor)  //busca todas las citas por el id del doctor

doctorRouter.get('/specialty', getSpecialty); //todas las especialidades

doctorRouter.get('/sure', getSure); //todas las obras sociales

doctorRouter.get('/', getAllDoctors ) //muestra todos los doctores


module.exports= doctorRouter
