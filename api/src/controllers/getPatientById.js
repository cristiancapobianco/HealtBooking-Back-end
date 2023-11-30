const { Patient } = require('../db');

const getPatientById = async(req,res) => {

    const {idPatient} = req.params;

    try {

        const patientById = await Patient.findOne({
            where:{
                id: idPatient
            }
        });
        if(patientById){
            return res.status(200).json(patientById);
        }else{
            return res.send("Error al buscar el paciente");
        }
       
    
    } catch (error) {
      return  res.status(400).json({message:"Error al buscar paciente",error:error.message});
    }
  
};

module.exports={
    getPatientById
}