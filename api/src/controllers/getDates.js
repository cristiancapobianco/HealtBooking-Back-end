const { Appointment } = require('../db')

const getDate = async (req, res) => {
    try {
        const allDates = await Appointment.findAll({
            attributes: ['doctorId', 'date']
        })
        if (allDates) {
            res.status(201).send(allDates)
        } else {
            res.status(204).send("There are no registered appointments")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getDate
}