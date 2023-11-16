const { Router } = require('express');
const router = Router();
const cloudinary = require('../controllers/cloudinary')



//faltaria moduralizar las enrutaros
router.post("/crear", async (req, res) => {
    try {
        const newDoc = req.body
        const { name, lastName, tuition, email, image } = newDoc

        //nombre de los modelos a definir
        const existingDoc = await ModelDoc.findOne({
            where: {
                tuition
            }
        })

        if (existingDoc) {
            res.send({ message: "La matricula ya esta registrada" })
        } else {
            try {
                cloudinary.uploader.upload(image, (error, result) => {
                    if (error) {
                        console.error('Error al subir la imagen a Cloudinary:', error);
                        res.status(500).send('Error al subir la imagen');
                    } else {
                        console.log('Imagen subida con éxito:', result);
                        const imageUrl = result.secure_url;
                    }
                });
                const doc = await ModelDoc.create({ name, lastName, tuition, email, imageUrl })
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