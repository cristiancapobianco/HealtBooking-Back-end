
const mockAppointment = require('../../assets/data/mockAppointment.json').appointments;
const calcPrice = require('./calcPrice.js');
const postAppointment = require('../postAppointment.js');

// const { v4: uuidv4 } = require('uuid');

const loadDbAppointment = async () => {
  try {
    for (const appointment of mockAppointment) {
      const { date, time, idPatient, idDoctor } = appointment;

      // const id = uuidv4();
  
      const price = await calcPrice(idPatient, idDoctor);

      await postAppointment( date, time, idPatient, idDoctor, price);

    }
  } catch (error) {
    console.error('Error loading appointments:', error);
  }
};

module.exports = loadDbAppointment;