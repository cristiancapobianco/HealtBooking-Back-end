const { Op } = require('sequelize');
const { Medico, Especialidad, ObraSocial } = require('../db')

const detailDoctors = async (req, res) => {
    const { idDoc } = req.params

    try {
        if (idDoc) {
            const data = await Medico.findOne({
                where: {
                    id: {
                        [Op.iLike]: `%${idPais}%`
                    }
                },
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
    }
    catch {
        return res.status(404).json({ message: 'Error al encontrar detalle del medico' });
    }
}

module.exports = { detailDoctors }