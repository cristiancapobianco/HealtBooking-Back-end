const { Doctor, Specialty, Sure, DoctorSure, Patient, DoctorPatient } = require('../db');

const getAllUsers = async (req, res) => {

    try {
        const doctors = await Doctor.findAll({
            attributes: ['id', 'name', 'profilePicture', 'state', 'email', 'rol'],
            where: {
                state: ['active', 'inactive'],
            },
        });

        const patients = await Patient.findAll({
            attributes: ['id', 'name', 'state', 'email', 'rol'],
            where: {
                state: ['active', 'inactive'],
            },
        });

        const allUsers = [...doctors, ...patients];

        // console.log(allUsers);

        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: 'Error al encontrar médicos y pacientes', error: error.message });
    }
};

module.exports = {
    getAllUsers
};

