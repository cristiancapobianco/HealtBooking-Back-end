const { Router } = require('express');
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { postDoctor } = require("../controllers/postDoctor")
const { detailDoctor } = require("../controllers/detailDoctors");
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');
const { getAllUsers } = require('../controllers/getAllUsers');
const handlerPostAppointment = require('../handlers/handlerPostAppointment');
const { updateDoctor } = require('../controllers/updateDotor');
const { postPatient } = require('../controllers/postPatient');
//const { getDate } = require('../controllers/getDates');
const { pagosMP } = require('../controllers/mercadopago');
const { notifyPay } = require('../controllers/notificationMP');
const { changeStatus } = require('../controllers/toggleAccount');
const { getAppointmentByPatient } = require('../controllers/getAppointmentByPatient');
const { getAppointmentByDoctor } = require('../controllers/getAppointmentByDoctor');



const router = Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:idDoc', detailDoctor);
router.post('/doctor', postDoctor);
router.get('/specialty', getSpecialty);
router.get('/sure', getSure);
router.get('/admin', getAllUsers);
router.patch('/admin/doctors/:idDoc', updateDoctor)
router.post('/pacient/register', postPatient);
router.patch('/toggle/:idUser', changeStatus);
router.post('/appointment', handlerPostAppointment)
router.get('/appointment/:idPatient',getAppointmentByPatient)
router.get('/appointment/:idDoctor', getAppointmentByDoctor)

//router.get('/date', getDate)

// MERCADOPAGO
router.post("/pay", pagosMP)
router.post("/notificationPay", notifyPay)


module.exports = router