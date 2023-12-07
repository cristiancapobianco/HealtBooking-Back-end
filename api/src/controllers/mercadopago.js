require("dotenv").config();
const postAppointment = require("../controllers/postAppointment")
const { v4: uuidv4 } = require('uuid');
const calcPrice = require('../controllers/loadDb/calcPrice');


const {
    ACCESS_TOKEN
} = process.env;


const { MercadoPagoConfig, Preference } = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });



const pagosMP = async (req, res) => {
    const product = req.body;
    const preference = new Preference(client);

    const id = uuidv4();

    const { date, time, idPatient, idDoctor } = req.body

    // console.log(req.body)
    const price = await calcPrice(idPatient, idDoctor);

    const newAppointment = await postAppointment(id, date, time, idPatient, idDoctor, price)

    preference.create({
        body: {
            items: [
                {
                    id: id,
                    title: product.name,
                    quantity: 1,
                    unit_price: Number(price)
                }
            ],
            external_reference: id,
            notification_url: 'https://healtbooking-backend.onrender.com/notificationPay',
            back_urls: {
                success: "http://localhost:5173/patient",
                failure: "http://localhost:5173/patient",
                pending: "",
            },
            auto_return: "approved",
        }
    })
        .then(function (response) {
            res.status(200).json(response.init_point);
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al crear la preferencia de pago.', m });
        });
};

module.exports = {
    pagosMP
}
