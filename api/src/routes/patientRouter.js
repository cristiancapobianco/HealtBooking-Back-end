const {Router}= require('express')
const { getPatientById } = require('../controllers/getPatientById');
const { detailDoctor } = require("../controllers/detailDoctors");
const { postPatient } = require('../controllers/postPatient');
const {handlerPostAppointment} = require('../handlers/handlerPostAppointment');
const { getAppointmentByPatient } = require('../controllers/getAppointmentByPatient');
const { pagosMP } = require('../controllers/mercadopago');
const { notifyPay } = require('../controllers/notificationMP');
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { putPatient } = require('../controllers/putPatient');
const patchScoreDoctor = require('../controllers/patchScoreDoctor');

const patientRouter=Router();

// URl_Base + /patient/
patientRouter.put('/:idPatient', putPatient) //modifica los datos del paciente

patientRouter.get('/doctor/:idDoc', detailDoctor) // busca la informacion del doctor por id

patientRouter.post('/register', postPatient) //crea un usuario paciente

patientRouter.post('/appointment', handlerPostAppointment) //crea una cita nueva

patientRouter.get('/appointment/:idPatient',getAppointmentByPatient) //busca las citas por id del paciente

patientRouter.get('/specialty', getSpecialty); //todas las especialidades

patientRouter.get('/sure', getSure); //todas las obras sociales

patientRouter.get('/doctors', getAllDoctors ) //muestra todos los doctores

patientRouter.post('/pay', pagosMP) // MERCADOPAGO

patientRouter.post("/notificationPay", notifyPay) // MERCADOPAGO

patientRouter.get('/:idPatient',getPatientById ) //busca todos los datos del paciente

patientRouter.patch('/appointment' , patchScoreDoctor) //cargar score al appointment y al doctor


module.exports= patientRouter
