const { Medico, Especialidad, ObraSocial } = require('../db')

const getAllDoctors = async (req, res) => {

    try {

        const data = await Medico.findAll({
            include: [
                {
                    model: Especialidad,
                    attributes: ['nombre', 'id'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: ObraSocial,
                    attributes: ['nombre', 'id'],
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