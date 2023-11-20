const { Doctor, Specialty, Sure } = require('../db')

const getAllDoctors = async (req, res) => {

    try {

        const data = await Doctor.findAll({
            attributes: ['name', 'id', 'profilePicture'],
            include: [
                {
                    model: Specialty,
                    attributes: ['name', 'id']
                },
                {
                    model: Sure,
                    attributes: ['name', 'id'],
                    through: {
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
