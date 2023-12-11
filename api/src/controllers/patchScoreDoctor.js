const {Appointment}= require ('../db')
const patchReviewDoctor= require('./patchReviewDoctor')

const patchScoreDoctor= async(req, res)=>{
    const {idAppointment, score}=req.body;

    try{

        const regexScore= /^[1-5]$/;
        if(regexScore.test(score)){
        const appointment= await Appointment.findByPk(idAppointment);

        if(appointment){
            const updateAppoinment= await appointment.update({score})
            const updateDoctorScore= await patchReviewDoctor(appointment.doctorId, score)
            res.status(200).send('Update successful')
        }
        else{
            res.status(404).send('Appointment not found')
        }
        }
        else{
            res.status(400).send('Score must be between 1 and 5')
        }
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=patchScoreDoctor;