const { nombretablaturnos } = require('../db')

const getDate = async (req, res) => {
    try {
        const allDates = await nombretablaturnos.findAll({
            attributes: ['doctorid', 'date']
        })
        if (allDates) {
            res.status(201).send(allDates)
        } else {
            res.status(204).send("No hay citas")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getDate
}