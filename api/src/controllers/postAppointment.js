
const { Appointment } = require("../db");


const postAppointment = async (date, time, idPatient, idDoctor, price) => {

console.log( date, time, idPatient, idDoctor, price);

  const newAppointment = await Appointment.create({
    date: date,
    time: time,
    patientId: idPatient,
    doctorId: idDoctor,
    finalAmount: price,
    // idDoctor: idDoctor,
    // idPatient: idPatient,
  });

 


  // console.log('App registrado:', newAppointment);

  return newAppointment;
};

module.exports = postAppointment;
