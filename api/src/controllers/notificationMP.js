const { Appointment } = require("../db");

const notifyPay = async (req, res) => {
    const data = req.body;
    const { id } = data.data
    console.log(data)
    try {
        if (id !== "123456789") {
            const compra = await axios.get(`
            https://api.mercadopago.com/v1/payments/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ACCESS_TOKEN}` } })
            return res.status(200).json({ message: 'Estado de la cita actualizado con éxito', compra });
        }
        const appointment = await Appointment.findOne({
            where: { id: external_reference }
        });
        if (!appointment) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }

        await appointment.update({ status: 'paid' });

        return res.status(200).json({ message: 'Estado de la cita actualizado con éxito', external_reference });
    } catch (error) {
        console.error('Error al procesar la notificación de MercadoPago:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = notifyPay;

module.exports = {
    notifyPay
}
