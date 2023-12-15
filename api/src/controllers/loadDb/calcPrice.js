const { Patient, Doctor, Sure, DoctorSure } = require('../../db');
const { Op } = require('sequelize');

const calcPrice = async (idPatient, idDoctor) => {
    try {
        let price = 0;
        let doctorSure = '';
        let patientSure = '';
        // Obtener la información del paciente
        const patient = await Patient.findOne({
            where: {
                id: {
                    [Op.eq]: idPatient
                }
            }
        });
        // console.log('paciente',patient)
        // console.log('paciente',patient.dataValues.sureId)
        patientSure = patient.dataValues.sureId
        // console.log(patientSure);

        if (!patient) {
            throw new Error('Patient not found');
        }

        // Obtener la información del doctor con las relaciones
        const doctor = await Doctor.findOne({
            attributes: ['id', 'name', 'price'],
            where: {
                id: {
                    [Op.eq]: idDoctor
                }
            },
            include: [
                {
                    model: Sure,
                    attributes: ['id', 'name', 'discount'],
                    through: {
                        model: DoctorSure,
                        attributes: []
                    },
                }
            ]
        });
        // console.log(doctor);
        if (!doctor) {
            throw new Error('Doctor not found');
        }

        // Verificar si hay Sures asociados al doctor

        // Obtener el primer Sure asociado al doctor (puedes ajustar esto según tus necesidades)
        if (doctor.Sures && doctor.Sures.length > 0) {

            doctorSure = doctor.Sures.map(sure => sure.dataValues)
            // console.log(doctorSure);

            const matchSure = doctorSure.find(sure => sure.id === patientSure)
            // console.log('Coincidencia con : ', matchSure);

            // Comparar Sure del doctor con Sure del paciente
            if (matchSure) {
                // Calcular el precio con descuento
                price = doctor.dataValues.price - (doctor.dataValues.price * (matchSure.discount / 100));
                // console.log('Tarifa doctor', doctor.dataValues.price);
                // console.log('Descuento: ', matchSure.discount);
            }
            else {
                price = doctor.dataValues.price;
                // console.log('Tarifa sin coincidencia', price);
            }
        } else {
            // Si no hay Sures asociados al doctor, asignar el precio normal del doctor
            price = doctor.dataValues.price;
            // console.log('Tarifa sin cobertura', price);
        }

        return price;
    } catch (error) {
        // console.error('Error in calcPrice:', error.message);
        throw error; // Puedes manejar o lanzar el error según tus necesidades
    }
};

module.exports = calcPrice;
