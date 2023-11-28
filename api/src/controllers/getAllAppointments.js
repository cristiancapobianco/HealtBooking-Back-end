const { Appointment } = require('../db');

const getAllAppointments = async(req,res) => {

    try {
        const allApointments = await Appointment.findAll()
        return res.status(200).json(allApointments);
    } catch (error) {
        return res.status(500).json({ message: 'Error al cargar las citas', error: error.message });
    }

};

module.exports = {
    getAllAppointments
}