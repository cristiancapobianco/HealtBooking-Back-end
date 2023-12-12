require("dotenv").config();
const postAppointment = require("../controllers/postAppointment")
const { v4: uuidv4 } = require('uuid');
const calcPrice = require('../controllers/loadDb/calcPrice');
const moment = require('moment');


const {
    ACCESS_TOKEN
} = process.env;


const { MercadoPagoConfig, Preference } = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });



const pagosMP = async (req, res) => {
    const product = req.body;
    const preference = new Preference(client);


    const { date, time, idPatient, idDoctor } = req.body

    // console.log(req.body)
    const dateMoment= await moment(new Date(date)).format( 'YYYY-MM-DD')
    const price = await calcPrice(idPatient, idDoctor);

    const newAppointment = await postAppointment(dateMoment, time, idPatient, idDoctor, price)
    const { dataValues } = newAppointment


    preference.create({
        body: {
            items: [
                {
                    id: dataValues.id,
                    title: product.name,
                    quantity: 1,
                    unit_price: Number(price)
                }
            ],
            external_reference: dataValues.id,
            notification_url: 'https://healthbooking-backend.onrender.com/patient/notificationPay',
            back_urls: {
                success: "https://healthbooking-front.vercel.app/patient",
                failure: "https://healthbooking-front.vercel.app/patient",
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
            res.status(500).json({ error: 'Error al crear la preferencia de pago.', error });
        });
};

module.exports = {
    pagosMP
}
