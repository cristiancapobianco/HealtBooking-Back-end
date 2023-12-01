const { Patient, Doctor } = require('../db');

const getUserByEmail = async (req, res) => {

    const email = req.query.email;

    try {

        const doctor = await Doctor.findOne({
            where: {
                email: email
            }
        });

        const patient = await Patient.findOne({
            where: {
                email: email
            }
        });

        if(doctor || patient){
          return res.status(200).json(true);
        }else{
          return res.status(200).json(false);
        }


    } catch (error) {
        return res.status(500).json({ message: 'Error al buscar el usuario', error: error.message });
    }

};
module.exports = {
    getUserByEmail
}