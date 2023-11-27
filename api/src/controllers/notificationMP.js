

const notifyPay = (req, res) => {
    const data = req.body


    // Aquí puedes procesar la información y actualizar tu base de datos según sea necesario
    // Por ejemplo, puedes buscar la compra en tu base de datos usando el ID de la transacción
    // y actualizar su estado en consecuencia

    console.log(`Notificación de MercadoPago - ID de transacción: ${data.id}, Estado: ${data.status}`);
    res.status(200).end();
};

module.exports = {
    notifyPay
}
