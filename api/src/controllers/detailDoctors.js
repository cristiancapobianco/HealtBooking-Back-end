const { Op } = require('sequelize');
const { Doctors, Specialty, Sure } = require('../db')

const detailDoctors = async (req, res) => {
    const { idDoc } = req.params

    try {
        if (idDoc) {
            const data = await Doctors.findOne({
                where: {
                    id: {
                        [Op.iLike]: `%${idDoc}%`
                    }
                },
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
    }
    catch {
        return res.status(404).json({ message: 'Error al encontrar detalle del medico' });
    }
}

module.exports = { detailDoctors }