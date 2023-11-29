const { Patient, Doctor } = require('../db');

const getUserByEmail = async (req, res) => {

    const email = req.query.email;
<<<<<<< HEAD
=======

>>>>>>> 392a953f44935ff604c50b56989599c375cbf730
    console.log(email);

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

<<<<<<< HEAD
        if (doctor || patient) {
            return res.status(200).json(true);
        } else {
            return res.status(200).json(false);
=======
        if(doctor || patient){
          return res.status(200).json(true);
        }else{
          return res.status(200).json(false);
>>>>>>> 392a953f44935ff604c50b56989599c375cbf730
        }


    } catch (error) {
        return res.status(500).json({ message: 'Error al buscar el usuario', error: error.message });
    }

};
module.exports = {
    getUserByEmail
}