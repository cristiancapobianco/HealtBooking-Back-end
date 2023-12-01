const { Patient, Appointment, Doctor, Specialty } = require('../db');
const { Op } = require('sequelize');

const getAppointmentByPatient = async (req, res) => {

    const {idPatient} = req.params;

 


    const patient = await Patient.findOne({
        where: {
            id: idPatient
        }
    });

    if (patient) {

        try {

            const appointments = await Appointment.findAll({
                idPatient,

                where: {
                    patientId: idPatient
                },
                include: [
                    {
                        model: Doctor,
                        attributes: ['name'],
                        include: [
                            {
                                model: Specialty,
                                attributes: ['name']
                            }
                        ]
                    }
                ],
            });

            if (appointments) {

                return res.status(200).json(appointments);

    
            }else{
                 return res.send('No hay citas registradas para ese paciente')





        } catch (error) {

            return res.status(500).json({ message: 'No hay citas registradas para ese paciente', error: error.message });

        }



    } else {
        res.send('No hay pacientes registrados con ese dni')
    }



};
module.exports = {
    getAppointmentByPatient
}