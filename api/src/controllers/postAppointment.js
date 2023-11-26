// const {Appointment,Doctor, Patient} = require('../db')



// const postAppointment=async (date,time,idPatient,idDoctor,finalAmount)=>{

//     const existPatient= await Patient.findOne({where:{id:idPatient}})

//     console.log('Paciente encontrado: ' ,existPatient);
   

//     const newAppointment = await Appointment.create({date: date, time: time,finalAmount: finalAmount})
//     console.log('App registrado: ',newAppointment);
//     console.log('Dato patient en post ',idPatient);


//     const existDoctor= await Doctor.findOne({where:{id:idDoctor}})
//     console.log('Doctor encontrado: ',existDoctor);

//     if(existDoctor && existPatient){
//         await newAppointment.dataValues.idDoctor(idDoctor)
//         await newAppointment.setPatient(idPatient)
//         // await existDoctor.setAppointment(newAppointment.id)
//         // await existPatient.setAppointment(newAppointment.id)
//     }
//    return newAppointment
// }

// module.exports = postAppointment

const { Appointment, Doctor, Patient } = require("../db");

const postAppointment = async (date, time, idPatient, idDoctor, finalAmount) => {
  const existPatient = await Patient.findOne({ where: { id: idPatient } });
  console.log('Paciente encontrado:', existPatient);

  const newAppointment = await Appointment.create({
    date: date,
    time: time,
    finalAmount: finalAmount,
  });
  console.log('App registrado:', newAppointment);
  console.log('Dato patient en post ', idPatient);

  const existDoctor = await Doctor.findOne({ where: { id: idDoctor } });
  console.log('Doctor encontrado:', existDoctor);

  if (existDoctor && existPatient) {
    // Asignar el id del doctor y del paciente a la cita
    newAppointment.idDoctor = idDoctor;
    newAppointment.idPatient = idPatient;

    // Guardar la cita con los ids asignados
    await newAppointment.save();
  }
  console.log(newAppointment);
  return newAppointment;
};

module.exports = postAppointment;
