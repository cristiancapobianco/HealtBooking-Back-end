const { Router } = require('express');
const router = Router();
const { getAllDoctors } = require("../controllers/getAllDoctors")
const { postDoctor } = require("../controllers/postDoctor")



router.get('/doctors', getAllDoctors);
router.post('/doctor', postDoctor);


module.exports = router