const { Sure } = require('../db')


const getSures = async (req, res) => {
    try {
        const sures = await Sure.findAll()
        if (sures) {
            res.status(200).send(sures)
        } else {
            res.status(204).send("No se encontraron las obars sociales")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    getSures
}