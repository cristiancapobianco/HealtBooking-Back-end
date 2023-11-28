require("dotenv").config();


const {
    ACCESS_TOKEN
} = process.env;


const { MercadoPagoConfig, Preference } = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });


const pagosMP = (req, res) => {
    const product = req.body;
    const preference = new Preference(client);

    preference.create({
        body: {
            items: [
                {
                    id: product.id,
                    title: product.name,
                    quantity: 1,
                    unit_price: Number(product.price),
                    picture_url: product.image
                }
            ],
            back_urls: {
                success: "http://localhost:5173",
                failure: "http://localhost:5173",
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
        });
};

module.exports = {
    pagosMP
}
