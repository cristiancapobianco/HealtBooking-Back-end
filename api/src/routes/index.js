const { Router } = require('express');
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { postDoctor } = require("../controllers/postDoctor")
const { detailDoctors } = require("../controllers/detailDoctors")

const router = Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:idDoc', detailDoctors);
router.post('/doctor', postDoctor);


module.exports = router