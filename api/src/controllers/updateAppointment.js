const { Appointment } = require('../db');



const updateAppointment = async (req, res) => {

    const updateData = req.body;
    const { idAppointment } = req.params;
    console.log(updateData);
    console.log(idAppointment);
    try {

        const existingAppointment = await Appointment.findOne({
            where: { id: idAppointment }
        })

        if (existingAppointment) {
            const data = await Appointment.update(updateData, {
                where: {
                    id: idAppointment
                }
            })

            return res.status(200).json(data);

        } else {
            return res.status(404).json({ message: "Médico no encontrado" });
        }

    } catch (error) {
        res.status(404).json({ message: 'Error al modificar medico', error: error.message })
    }

}

module.exports = {
    updateAppointment
}