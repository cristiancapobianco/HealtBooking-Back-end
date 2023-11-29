// ACA POST DOCTOR

const { Doctor, Specialty, Sure } = require('../db')
const sendEmailDoctor = require('./notifications/sendEmailDoctor')


const postDoctor = async (req, res) => {
    try {
        const newDoc = req.body
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

                const existingSpecialty = await Specialty.findOne({
                    where: { name: specialty }
                });
                if (!existingSpecialty) {
                    return res.status(404).send({ message: `Especialidad '${specialty}' no encontrada.` });
                }

                const doc = await Doctor.create({ name, id, phone, email, profilePicture, SpecialtyId: existingSpecialty.id })

                if (!Array.isArray(sure)) {
                    return res.status(400).send({ message: "La propiedad 'sure' debe ser un array." });
                }

                for (const sureName of sure) {
                    const existingSure = await Sure.findOne({
                        where: { name: sureName }
                    });

                    if (existingSure) {
                        await doc.addSure(existingSure);
                    } else {
                        console.log(`Sure '${sureName}' no encontrado.`);
                    }
                }

                await sendEmailDoctor(name, email, specialty)
                res.status(200).send({ message: "Doctor creado", doc })
            } catch (error) {
                res.status(400).send(error.message)
            }
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    postDoctor
}
