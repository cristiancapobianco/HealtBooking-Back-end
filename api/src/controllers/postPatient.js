const { Patient, Sure } = require('../db');
const sendEmailPatient = require('./notifications/sendEmailPatient');

const postPatient = async (req, res) => {

    const newPatient = req.body;
    //console.log(req.body);

    const { id, name, phone, email, height, weight, sure } = newPatient;

    const existingPatient = await Patient.findOne({
        where: {
            id
        }
    });



    if (existingPatient) {
        res.send(true);
    }
    else {
        try {
            const patientData = await Patient.create({ id, name, phone, email, height, weight });

            const sureMedic = await Sure.findOne({ where: { name: sure } })

            await patientData.setSure(sureMedic);

            const dataPatient = {
                id: id,
                name: name,
                phone: phone,
                email: email,
                sure: sureMedic.name
            }

            await sendEmailPatient(dataPatient)

            return res.status(200).json({ message: 'Paciente registrado con éxito', patientData });
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

};
module.exports = {
    postPatient
}