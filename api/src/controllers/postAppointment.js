
const { Appointment } = require("../db");


const postAppointment = async (dateMoment, time, idPatient, idDoctor, price) => {

// console.log( date, time, idPatient, idDoctor, price);

  const newAppointment = await Appointment.create({
    date: dateMoment,
    time: time,
    patientId: idPatient,
    doctorId: idDoctor,
    finalAmount: price,
  
  });

 
  return newAppointment;
};

module.exports = postAppointment;
