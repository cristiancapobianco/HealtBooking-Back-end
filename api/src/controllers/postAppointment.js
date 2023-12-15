
const { Appointment } = require("../db");


const postAppointment = async (dateMoment, time, idPatient, idDoctor, price, paymentDay, status) => {

  // console.log( date, time, idPatient, idDoctor, price);

  const newAppointment = await Appointment.create({
    date: dateMoment,
    time: time,
    patientId: idPatient,
    doctorId: idDoctor,
    finalAmount: price,
    paymentDay: paymentDay,
    status: status

  });


  return newAppointment;
};

module.exports = postAppointment;
