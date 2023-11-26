
const mockAppointment = require('../../assets/data/mockAppointment.json').appointments;
const calcPrice = require('./calcPrice.js');
const postAppointment = require('../postAppointment.js');


const loadDbAppointment = async () => {
  try {
    for (const appointment of mockAppointment) {
      const { date, time, idPatient, idDoctor } = appointment;

      console.log( idPatient, idDoctor);
      
      const finalAmount = await calcPrice(idPatient, idDoctor);

      console.log(finalAmount);
      
    await postAppointment(date, time, idDoctor, idPatient, finalAmount);
    

    }
    console.log('Appointments loaded successfully.');
  } catch (error) {
    console.error('Error loading appointments:', error);
  }
};

module.exports = loadDbAppointment;