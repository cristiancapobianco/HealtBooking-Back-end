
const { Appointment } = require("../db");

const postAppointment = async (id, date, time, idPatient, idDoctor, price) => {

  const newAppointment = await Appointment.create({
    id: id,
    date: date,
    time: time,
    finalAmount: price,
    doctorId: idDoctor,
    patientId: idPatient,
    // idDoctor: idDoctor,
    // idPatient: idPatient,
  });
  console.log('App registrado:', newAppointment);

  return newAppointment;
};

module.exports = postAppointment;
