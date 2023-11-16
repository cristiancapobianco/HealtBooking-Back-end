const { Router } = require('express');
const router = Router();


router.get("/", (req, res) => {
    res.send("Prueba de cambios desde la rama Andres")
})

module.exports = router