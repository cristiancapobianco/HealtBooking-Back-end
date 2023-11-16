const { Router } = require('express');
const router = Router();

router.get("/", async (req, res) => {
    res.send("hola")
})

router.post("/crear", async (req, res) => {
    try {
        const newDoc = req.body
        const { name, lastName, tuition, email, } = newDoc

        const existingDoc = await ModelDoc.findOne({
            where: {
                tuition
            }
        })

        if (existingDoc) {
            res.send({ message: "La matricula ya esta registrada" })
        } else {
            try {
                const doc = await ModelDoc.create({ name, lastName, tuition, email })
                /* 
                falta verificar como mandarian las especialidades y manjarlas
                falta hacer las relaciones de las especialidades con los doctores
                */

                res.send("Doctor creado", doc)
            } catch (error) {
                res.send("Error al crear doctor", error.message)
            }
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router