const { Doctors, Specialty, Sure } = require('../db')

const getAllDoctors = async (req, res) => {

    try {

        const data = await Doctors.findAll({
            include: [
                {
                    model: Specialty,
                    attributes: ['name', 'id'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Sure,
                    attributes: ['name', 'id'],
                    through: {
                        attributes: []
                    }
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