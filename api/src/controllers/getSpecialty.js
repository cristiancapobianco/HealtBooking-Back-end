const { Specialty } = require('../db')


const getspecialtys = async (req, res) => {
    try {
        const specialtys = await Specialty.findAll()
        if (specialtys) {
            res.status(200).send(specialtys)
        } else {
            res.status(204).send("No se encontraron las especialidades")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    getspecialtys
}