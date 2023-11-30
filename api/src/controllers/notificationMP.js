const { Appointment } = require("../db");

const notifyPay = async (req, res) => {
    const data = req.body;

    try {

        const appointment = await Appointment.findOne({
            where: { id: data.id }
        });


        if (!appointment) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }

        await appointment.update({ status: 'paid' });
        console.log(data)

        return res.status(200).json({ message: 'Estado de la cita actualizado con éxito', data });
    } catch (error) {
        console.error('Error al procesar la notificación de MercadoPago:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = notifyPay;

module.exports = {
    notifyPay
}
