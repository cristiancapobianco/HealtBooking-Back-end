const { Appointment, Doctor, Specialty,Patient } = require('../db');
const sendEmailModifiedDate = require('./notifications/sendEmailModifiedDate');


const updateAppointment = async (req, res) => {

    const newDate = req.body;
    const { idAppointment } = req.params;
    // console.log(newDate);
    // console.log(idAppointment);
    try {

        const existingAppointment = await Appointment.findOne({
            where: { id: idAppointment }
        })

        if (existingAppointment) {
            const data = await Appointment.update(newDate, {
                where: {
                    id: idAppointment
                }
            })

           const emailPatient= await Patient.findByPk(existingAppointment.dataValues.patientId);
    
           const dataDoctor = await Doctor.findByPk(existingAppointment.dataValues.doctorId, {
            include: {
                model: Specialty,
                attributes: ['name']
            }
        });
        const appointmentUpdated = await Appointment.findByPk(idAppointment)


           const dataModified={
            id: appointmentUpdated.dataValues.doctorId,
            email:emailPatient.dataValues.email,
            date:appointmentUpdated.dataValues.date,
            time:appointmentUpdated.dataValues.time,
            doctor: dataDoctor.dataValues.name,
            specialty: dataDoctor.Specialty.dataValues.name
           }

        //    console.log('datos a enviar',dataModified);


          await sendEmailModifiedDate(dataModified)

            return res.status(200).send('Cita modificada con exito');

        } else {
            return res.status(404).json({ message: "No se encontró la cita" });
        }

    } catch (error) {
        res.status(404).json({ message: 'Error al modificar la cita', error: error.message })
    }

}

module.exports = {
    updateAppointment
}