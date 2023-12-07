const {Patient,Sure} = require('../db')


const putPatient= async (req, res)=>{
    const {id,name,height,weight,phone, email,rol, state, sureId}= req.body
    try {

        const newPut = await Patient.update({ id,name,height,weight,phone, email,rol, state}, {
          where: {
            id
          }
        });

        const existingPatient = await Patient.findOne({
            where:{
                id
            }
        });
        if(sureId){
            
            await existingPatient.setSure(sureId);
        }
        else{
            await existingPatient.setSure(null)
        }


        res.status(200).send(newPut)
    }
     catch (error)
     {
      throw Error ('Error en la modificacion')
    }
}

module.exports= {putPatient}