const { Router } = require('express');
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { postDoctor } = require("../controllers/postDoctor")
const { detailDoctor } = require("../controllers/detailDoctors");
const { bulker } = require('../controllers/bulker');


const router = Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:idDoc', detailDoctor);
router.post('/doctor', postDoctor);
router.post('/bulk', bulker)

module.exports = router