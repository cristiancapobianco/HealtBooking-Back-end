// ACA POST DOCTOR

const { Doctors, Specialty, Sure } = require('../db')


const postDoctor = async (req, res) => {
    try {
        const newDoc = req.body
        const { name, id, email, profilePicture, sure, specialty } = newDoc

        const existingDoc = await Doctors.findOne({
            where: {
                tuition
            }
        })

        if (existingDoc) {
            res.send({ message: "La matricula ya esta registrada" })
        } else {
            try {
                const doc = await Doctors.create({ name, id, email, profilePicture })

                for (const sureName of sure) {
                    const existingSure = await Sure.findOne({
                        where: { name: sureName }
                    });

                    if (existingSure) {
                        await Doctors.addSure(existingSure);
                    } else {
                        console.log(`Sure '${sureName}' no encontrado.`);
                    }
                }

                if (specialty) {
                    const existingSpecialty = await Specialty.findOne({
                        where: { name: specialty }
                    });

                    if (existingSpecialty) {
                        await Doctors.addSpecialty(existingSpecialty);
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
