
const { Appointment } = require("../db");

const postAppointment = async (date, time, idPatient, idDoctor, finalAmount) => {

  const newAppointment = await Appointment.create({
    date: date,
    time: time,
    finalAmount: finalAmount,
    doctorId: idDoctor,
    patientId: idPatient,
  });
 // console.log('App registrado:', newAppointment);
 
  return newAppointment;
};

module.exports = postAppointment;
