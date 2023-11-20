const { Doctor, Specialty, Sure, DoctorSure } = require('../db')

const getAllDoctors = async (req, res) => {

    try {

        const data = await Doctor.findAll({
            attributes: ['name', 'id', 'profilePicture'],
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
                }
            ]

        })
        return res.status(200).json(data);

    }
    catch (error) {
        return res.status(500).json({ message: 'Error al encontrar medicos', error: error.message });
    }
}

module.exports = {
    getAllDoctors
}
