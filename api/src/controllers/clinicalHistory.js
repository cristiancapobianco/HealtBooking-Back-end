const { Patient, Doctor } = require('../db');
const { Op } = require('sequelize');

const changeHistory = async (req, res) => {
    const { idPatient, clinicalHistory } = req.body


    try {

        // BUSCA PACIENTE
        const patient = await Patient.findOne({
            where: {
                id: {
                    [Op.eq]: idPatient
                }
            }
        });

        if (patient) {
            await Patient.update({ history: clinicalHistory }, { where: { id: idPatient } });
            res.status(200).json({ mensaje: `Historial clinico Actualizado` });
        }
    }
    catch (error) {
        // console.error(error);
        res.status(500).json({ mensaje: 'Error al cambiar historial clinico', error });
    }
};

module.exports = {
    changeHistory
};