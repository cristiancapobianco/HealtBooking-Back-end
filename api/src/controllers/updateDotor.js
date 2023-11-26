const { Doctor } = require('../db');



const updateDoctor = async (req,res) => {

    const {updateData} = req.body;
    const {idDoc} = req.params;
  
    try {

        const existingDoc = await Doctor.findOne({
            where:{id:idDoc}
        })

        if(existingDoc){
         const data = await Doctor.update(updateData,{
                where:{
                    id:idDoc
                }
            })
           
            return res.status(200).json(data);
            
        }else{
            throw new Error('Médico no encontrado');
        }
       
    } catch (error) {
        res.status(404).json({ message: 'Error al modificar medico', error: error.message})
    }

}

module.exports ={
    updateDoctor
}