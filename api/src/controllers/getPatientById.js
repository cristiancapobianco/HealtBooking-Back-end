const { Patient, Sure } = require('../db');

const getPatientById = async(req,res) => {

    const {idPatient} = req.params;

    try {

        const patientById = await Patient.findOne({
            where: {
                id: idPatient
              },
              include: {
                model: Sure,
                attributes: ['id', 'name'] // Asegúrate de poner los nombres de las columnas correctamente
              }
        });
        if(patientById){
            return res.status(200).json(patientById);
        }
        else{
            return  res.status(404).json({message:"Error al buscar paciente"});
        }
       
    
    } catch (error) {
      return  res.status(404).json({message:"Error al buscar paciente",error:error.message});
    }
  
};

module.exports={
    getPatientById
}