
const mockAppointment = require('../../assets/data/mockAppointment.json').appointments;
const calcPrice = require('./calcPrice.js');
const postAppointment = require('../postAppointment.js');


const loadDbAppointment = async () => {
  try {
    for (const appointment of mockAppointment) {
      const { date, time, idPatient, idDoctor,paymentDay } = appointment;

      const price = await calcPrice(idPatient, idDoctor);

      const dateMoment= await moment(new Date(date)).format( 'YYYY-MM-DD')

      await postAppointment( dateMoment, time, idPatient, idDoctor, price,paymentDay);

    }
  } catch (error) {
    throw alert('Error loading appointments:', error);
  }
};

module.exports = loadDbAppointment;