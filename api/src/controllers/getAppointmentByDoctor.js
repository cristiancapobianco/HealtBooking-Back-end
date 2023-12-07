const { Appointment, Patient, Sure } = require('../db')

const getAppointmentByDoctor = async (req, res) => {

    const { idDoctor } = req.params

    try {
        const allDates = await Appointment.findAll({
            where: {
                doctorId: idDoctor,
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
    getAppointmentByDoctor
}