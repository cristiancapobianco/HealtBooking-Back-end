const nodemailer= require ('nodemailer')


const sendEmailPatient=async(name, email)=>{

    const config={
        host: 'smtp.gmail.com',
        port:587,
        auth:{
            user: 'healthbookingPf@gmail.com',
            pass: 'bcxh vfcy qzge trbo'
        }
    }

    const message={
        from: 'healthbookingPf@gmail.com',
        to: email,
        subject: 'Registro de usuario',
        text: `Bienvenido ${name}, su registro ha sido exitoso ya puede reservar su cita`
    }
    
    
    const transport= nodemailer.createTransport(config)

    const info = await transport.sendMail(message)
    console.log(info);
}

module.exports = sendEmailPatient