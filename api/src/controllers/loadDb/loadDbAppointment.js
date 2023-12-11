
const mockAppointment = require('../../assets/data/mockAppointment.json').appointments;
const calcPrice = require('./calcPrice.js');
const postAppointment = require('../postAppointment.js');
const moment= require ('moment')

const loadDbAppointment = async () => {
  try {
    for (const appointment of mockAppointment) {
      const { date, time, idPatient, idDoctor } = appointment;

      const dateMoment= await moment(date, 'DD/MM/YYYY');

      const price = await calcPrice(idPatient, idDoctor);

      await postAppointment( dateMoment, time, idPatient, idDoctor, price);

    }
  } catch (error) {
    throw alert('Error loading appointments:', error);
  }
};

module.exports = loadDbAppointment;