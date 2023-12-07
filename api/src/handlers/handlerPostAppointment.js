const postAppointment = require("../controllers/postAppointment")

const handlerPostAppointment=async(req, res)=>{

    const {date, time, idPatient, idDoctor, finalAmount}= req.body

    try {
        const newAppointment= await postAppointment(date, time, idPatient, idDoctor, finalAmount)
        
        res.status(200).send({ message: "Reserved appointment", newAppointment })
    } catch (error) {
        res.status(500).send(error.message)
    }
}   

module.exports = {handlerPostAppointment}