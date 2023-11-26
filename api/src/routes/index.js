const { Router } = require('express');
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { postDoctor } = require("../controllers/postDoctor")
const { detailDoctor } = require("../controllers/detailDoctors");
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');
const { getAllUsers } = require('../controllers/getAllUsers');
const { updateDoctor } = require('../controllers/updateDotor')
//const { getDate } = require('../controllers/getDates');

const router = Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:idDoc', detailDoctor);
router.post('/doctor', postDoctor);
router.get('/specialty', getSpecialty);
router.get('/sure', getSure);
router.get('/admin',getAllUsers);
router.patch('/admin/doctors/:idDoc',updateDoctor)
//router.get('/date', getDate)

module.exports = router