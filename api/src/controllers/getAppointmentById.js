const { Appointment, Patient, Sure } = require('../db')

const getAppointmentById = async (req, res) => {

    const { idAppointment } = req.params
    try {
        const date = await Appointment.findOne({
            where: {
                id: idAppointment
            },
            include: [
                {
                    model: Patient,
                    attributes: ['name', 'history'],
                    include: [
                        {
                            model: Sure,
                            attributes: ['name']
                        }
                    ]
                }
            ]
        })
        if (date) {
            res.status(201).send(date)
        } else {
            res.status(204).send("There are no registered appointments")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAppointmentById
}