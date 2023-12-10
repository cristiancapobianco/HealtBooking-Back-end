const { Op } = require('sequelize');
const { Doctor, Specialty, Sure, DoctorSure } = require('../db')

const detailDoctor = async (req, res) => {
    const { idDoc } = req.params

    try {
        if (idDoc) {
            const data = await Doctor.findOne({
                attributes: ['name', 'id', 'phone', 'email', 'profilePicture', 'price','reviews'],
                where: {
                    id: {
                        [Op.eq]: idDoc
                    }
                },
                include: [
                    {
                        model: Specialty,
                        attributes: ['name', 'id']
                    },
                    {
                        model: Sure,
                        attributes: ['name', 'id'],
                        through: {
                            model: DoctorSure,
                            attributes: []
                        },
                    }
                ]
            })
            return res.status(200).json(data);
        }
    }
    catch (error) {
        return res.status(404).json({ message: 'Error al encontrar detalle del medico', error: error.message });
    }
}

module.exports = { detailDoctor }