// ACA POST DOCTOR

const { Doctor, Specialty, Sure } = require('../db')


const postDoctor = async (req, res) => {
    try {
        const newDoc = req.body
        console.log(newDoc);
        const { name, id, email, phone, profilePicture, sure, specialty } = newDoc

        const existingDoc = await Doctor.findOne({
            where: {
                id
            }
        })

        if (existingDoc) {
            res.send({ message: "La matricula ya esta registrada" })
        } else {
            try {
                const doc = await Doctor.create({ name, id, phone, email, profilePicture })

                if (!Array.isArray(sure)) {
                    return res.status(400).send({ message: "La propiedad 'sure' debe ser un array." });
                }

                for (const sureName of sure) {
                    const existingSure = await Sure.findOne({
                        where: { name: sureName }
                    });

                    if (existingSure) {
                        await Doctor.addSure(existingSure);
                    } else {
                        console.log(`Sure '${sureName}' no encontrado.`);
                    }
                }

                if (specialty) {
                    const existingSpecialty = await Specialty.findOne({
                        where: { name: specialty }
                    });

                    if (existingSpecialty) {
                        await Doctor.addSpecialty(existingSpecialty);
                    } else {
                        res.send(`Especialidad '${specialty}' no encontrada.`);
                    }
                }

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
