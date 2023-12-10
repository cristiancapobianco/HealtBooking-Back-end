const { Patient, Doctor, Master } = require('../db');

const getUserByEmail = async (req, res) => {

    const email = req.query.email;

//    console.log(email);

    try {

        const doctor = await Doctor.findOne({
            where: {
                email: email
            }
        });

        const patient = await Patient.findOne({
            where: {
                email: email
            }
        });

        const master = await Master.findOne({
            // attributes:["id","name", "email","rol"],
            where: {
                email: email
            }
        })

        if (doctor) {
            return res.status(200).json({ exist: true, rol: doctor.rol, user: doctor });
        }
        if (patient) {
            return res.status(200).json({ exist: true, rol: patient.rol, user: patient });
        }

        if (master) {
            return res.status(200).json({ exist: true, rol: master.rol, user: master });
        }
        else {
            return res.status(200).json({ exist: false, rol: 'patient' });
        }


    } catch (error) {
        return res.status(500).json({ message: 'Error al buscar el usuario', error: error.message });
    }

};
module.exports = {
    getUserByEmail
}