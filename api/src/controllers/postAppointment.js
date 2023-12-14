
const { Appointment } = require("../db");


const postAppointment = async (dateMoment, time, idPatient, idDoctor, price,paymentDay) => {

// console.log( date, time, idPatient, idDoctor, price);

  const newAppointment = await Appointment.create({
    date: dateMoment,
    time: time,
    patientId: idPatient,
    doctorId: idDoctor,
    finalAmount: price,
    paymentDay: paymentDay
  
  });

 
  return newAppointment;
};

module.exports = postAppointment;
