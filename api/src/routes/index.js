const { Router } = require('express');
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { postDoctor } = require("../controllers/postDoctor")
const { detailDoctor } = require("../controllers/detailDoctors");
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');
//const { getDate } = require('../controllers/getDates');
const { pagosMP } = require('../controllers/mercadopago');
const { notifyPay } = require('../controllers/notificationMP');



const router = Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:idDoc', detailDoctor);
router.post('/doctor', postDoctor);
router.get('/specialty', getSpecialty)
router.get('/sure', getSure)
//router.get('/date', getDate)

// MERCADOPAGO
router.post("/pay", pagosMP)
router.post("/notificationPay", notifyPay)


module.exports = router