
const mockAppointment = require('../../assets/data/mockAppointment.json').appointments;
const calcPrice = require('./calcPrice.js');
const postAppointment = require('../postAppointment.js');


const loadDbAppointment = async () => {
  try {
    for (const appointment of mockAppointment) {
      const { date, time, idPatient, idDoctor } = appointment;

      const price = await calcPrice(idPatient, idDoctor);

      await postAppointment( date, time, idPatient, idDoctor, price);

    }
  } catch (error) {
    throw alert('Error loading appointments:', error);
  }
};

module.exports = loadDbAppointment;