const { Patient, Doctor } = require('../db');
const { Op } = require('sequelize');

const changeStatus = async (req, res) => {
    const idUser = req.params.idUser;


    try {

        // BUSCA PACIENTE
        const patient = await Patient.findOne({
            where: {
                id: {
                    [Op.eq]: idUser
                }
            }
        });

        if (patient) {
            const nuevoEstado = patient.state === 'activo' ? 'inactivo' : 'activo';
            await Patient.update({ state: nuevoEstado }, { where: { id: idUser } });
            res.status(200).json({ mensaje: `Estado de la cuenta cambiado a ${nuevoEstado}` });

            // BUSCA MEDICO
        } else {
            const doctor = await Doctor.findOne({
                where: {
                    id: {
                        [Op.eq]: idUser
                    }
                }
            });

            if (doctor) {
                const nuevoEstado = doctor.state === 'activo' ? 'inactivo' : 'activo';
                await Doctor.update({ state: nuevoEstado }, { where: { id: idUser } });
                res.status(200).json({ mensaje: `Estado de la cuenta cambiado a ${nuevoEstado}` });
            } else {
                res.status(404).json({ mensaje: 'Cuenta no encontrada' });
            }
        }
    } catch (error) {
        // console.error(error);
        res.status(500).json({ mensaje: 'Error al cambiar el estado de la cuenta' });
    }
};

module.exports = {
    changeStatus
};