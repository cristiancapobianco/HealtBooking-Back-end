const { Appointment } = require("../db");
require("dotenv").config();
const axios = require('axios');

const {
    ACCESS_TOKEN
} = process.env;

const notifyPay = async (req, res) => {
    const data = req.body;

    try {

        const { id } = data.data;
        let external_reference;

        if (id === "123456789") {
            return res.status(200).json({ message: 'Estado de la cita actualizado con éxito' });
        }

        if (id !== "123456789") {
            const compraResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ACCESS_TOKEN}` }
            });

            console.log(compraResponse)
            external_reference = compraResponse.data.external_reference;
            console.log(external_reference);
        }

        const appointment = await Appointment.findOne({
            where: { id: external_reference }
        });

        if (!appointment) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }

        await appointment.update({ status: 'pago' });

        return res.status(200).json({ message: 'Estado de la cita actualizado con éxito' });
    } catch (error) {
        console.error('Error al procesar la notificación de MercadoPago:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    notifyPay
};