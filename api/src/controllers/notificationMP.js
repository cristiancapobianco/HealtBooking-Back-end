const { Appointment } = require("../db");
require("dotenv").config();
const axios = require('axios');

const {
    ACCESS_TOKEN
} = process.env;


const notifyPay = async (req, res) => {
    const data = req.body;
    const { id } = data.data
    try {
        if (id !== "123456789") {
            const compra = await axios.get(`
            https://api.mercadopago.com/v1/payments/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ACCESS_TOKEN}` } })
            console.log(compra.data.external_reference)

        }

        const appointment = await Appointment.findOne({
            where: { id: compra.data.external_reference }
        });
        if (!appointment) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }

        await appointment.update({ status: 'paid' });
        // console.log(data)

        return res.status(200).json({ message: 'Estado de la cita actualizado con éxito' });
    } catch (error) {
        console.error('Error al procesar la notificación de MercadoPago:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = notifyPay;

module.exports = {
    notifyPay
}
