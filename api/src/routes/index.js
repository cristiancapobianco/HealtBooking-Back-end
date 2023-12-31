const { Router } = require('express');
// const { getAllDoctors } = require("../controllers/getAllDoctors")
// const { postDoctor } = require("../controllers/postDoctor")
// const { detailDoctor } = require("../controllers/detailDoctors");
// const { getSpecialty } = require('../controllers/getSpecialty');
// const { getSure } = require('../controllers/getSure');
// const { getAllUsers } = require('../controllers/getAllUsers');
// const {handlerPostAppointment} = require('../handlers/handlerPostAppointment');
// const { updateDoctor } = require('../controllers/updateDotor');
// const { postPatient } = require('../controllers/postPatient');
//const { getDate } = require('../controllers/getDates');
// const { pagosMP } = require('../controllers/mercadopago');
// const { notifyPay } = require('../controllers/notificationMP');
// const { changeStatus } = require('../controllers/toggleAccount');
// const { getAppointmentByPatient } = require('../controllers/getAppointmentByPatient');
// const { getAppointmentByDoctor } = require('../controllers/getAppointmentByDoctor');
// const { getAllAppointments } = require('../controllers/getAllAppointments');
// const { getPatientById } = require('../controllers/getPatientById');
// const handlerPostMaster = require('../handlers/hanlderPostMaster');

const { getUserByEmail } = require('../controllers/getUserByEmail');

const masterRouter = require('./masterRouter')
const patientRouter= require('./patientRouter')
const doctorRouter=  require('./doctorRouter')


const router = Router();

router.get('/logging',getUserByEmail)
router.use('/master', masterRouter)
router.use('/patient', patientRouter)
router.use('/doctor', doctorRouter)


// router.get('/doctors', getAllDoctors);
// router.post('/doctor', postDoctor);
// router.get('/specialty', getSpecialty);
// router.get('/sure', getSure);
// router.get('/doctors/:idDoc', detailDoctor);
// router.post('/pacient/register', postPatient);
// router.get('/patient/:idPatient',getPatientById)
// router.post('/appointment', handlerPostAppointment)
// router.get('/appointment/:idPatient',getAppointmentByPatient)
// router.get('/appointment/:idDoctor', getAppointmentByDoctor)
// router.get('/admin/appointment',getAllAppointments)
// router.post('/master', handlerPostMaster)
// router.patch('/toggle/:idUser', changeStatus);
// router.patch('/admin/doctors/:idDoc', updateDoctor)
// router.get('/admin', getAllUsers);
//router.get('/date', getDate)

// MERCADOPAGO
// router.post("/pay", pagosMP)
// router.post("/notificationPay", notifyPay)


module.exports = router