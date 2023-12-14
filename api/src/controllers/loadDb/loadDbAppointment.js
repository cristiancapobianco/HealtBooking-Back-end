
const mockAppointment = require('../../assets/data/mockAppointment.json').appointments;
const calcPrice = require('./calcPrice.js');
const postAppointment = require('../postAppointment.js');
const moment = require('moment');


const loadDbAppointment = async () => {
  try {
    for (const appointment of mockAppointment) {
      const { date, time, idPatient, idDoctor, paymentDay, status } = appointment;

      const price = await calcPrice(idPatient, idDoctor);

      const dateMoment = await moment(new Date(date)).format('YYYY-MM-DD')

      await postAppointment(dateMoment, time, idPatient, idDoctor, price, paymentDay, status);

    }
  } catch (error) {
    console.error('Error loading appointments:', error);
  }
};

module.exports = loadDbAppointment;