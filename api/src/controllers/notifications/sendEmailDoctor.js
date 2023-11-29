const nodemailer= require ('nodemailer')


const sendEmailDoctor=async(name, email, specialty)=>{

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
        subject: 'Registro Staff',
        text: `Bienvenido ${name} al Staff de HEALTBOOKING en la especialidad ${specialty}`
    }
    const transport= nodemailer.createTransport(config)

    const info = await transport.sendMail(message)
    console.log(info);
}

module.exports = sendEmailDoctor