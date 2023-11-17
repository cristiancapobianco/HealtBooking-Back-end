// ACA POST DOCTOR

const { Doctors, Specialty, Sure } = require('../db')


const postDoctor = async (req, res) => {
    try {
        const newDoc = req.body
        const { name, lastName, tuition, email, image } = newDoc

        //nombre de los modelos a definir
        const existingDoc = await Doctors.findOne({
            where: {
                tuition
            }
        })

        if (existingDoc) {
            res.send({ message: "La matricula ya esta registrada" })
        } else {
            try {
                const doc = await Doctors.create({ name, lastName, tuition, email, imageUrl })
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
}


module.exports = {
    postDoctor
}
