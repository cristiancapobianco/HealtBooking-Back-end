const {Patient} = require('../db');

const postPatient = async(req,res) => {

    const newPatient = req.body;
    console.log(newPatient);

    const {id,name,phone,email,password} = newPatient;

    const existingPatient = await Patient.findOne({
        where:{
            id
        }
    });

    const existingPassword = await Patient.findOne({
        where:{
            password
        }
    })




    

    if(existingPatient){
        res.send({message:"Paciente ya registrado"});
    }
    else if(existingPassword)
    {
        res.send({message:'Password existente'});
    }
    else{
        try {
            const patientData = await Patient.create({id,name,phone,email,password});
            return res.status(200).json({message:'Paciente registrado con éxito',patientData});
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

};
module.exports ={
    postPatient
}