const { Appointment } = require('../db');
const { Doctor } = require('../db');
const { Specialty } = require('../db');

const getAllAppointments = async(req,res) => {

    try {
        const allApointments = await Appointment.findAll({
            include: [
                {
                    model: Doctor,
                    attributes: ['name'],
                    include: [
                        {
                            model: Specialty,
                            attributes: ['name']
                        }
                    ]
                }
            ],
        })
        return res.status(200).json(allApointments);
    } catch (error) {
        return res.status(500).json({ message: 'Error al cargar las citas', error: error.message });
    }

};

module.exports = {
    getAllAppointments
}