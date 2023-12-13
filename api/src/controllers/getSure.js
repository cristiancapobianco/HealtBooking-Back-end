const { Sure } = require('../db')


const getSure = async (req, res) => {
    try {
        const sures = await Sure.findAll()
        if (sures) {
            res.status(200).send(sures)
        } else {
            res.status(204).send("No se encontraron las obras sociales")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    getSure
}