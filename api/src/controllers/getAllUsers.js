const { Doctor, Specialty, Sure, DoctorSure, Patient, DoctorPatient } = require('../db');

const getAllUsers = async (req, res) => {

    try {
        const data = await Doctor.findAll({
            attributes: ['id', 'name', 'profilePicture', 'state'], 
            include: [
                {
                    model: Specialty,
                    attributes: ['id']
                },
                {
                    model: Sure,
                    attributes: ['id'],
                    through: {
                        model: DoctorSure,
                        attributes: []
                    },
                },
                {
                    model: Patient,
                    attributes: ['id', 'name', 'state'],
                    through: {
                        model: DoctorPatient, 
                        attributes: []
                    },
                    where: {
                        state: ['active', 'inactive']
                    }
                }
            ]
        });

        return res.status(200).json(data);
        
    } catch (error) {
        return res.status(500).json({ message: 'Error al encontrar médicos y pacientes', error: error.message });
    }
};

module.exports = {
    getAllUsers
};