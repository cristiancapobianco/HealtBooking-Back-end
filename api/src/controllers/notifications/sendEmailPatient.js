const handlebars = require('handlebars'); 
const fs = require('fs');
const path = require('path');
const nodemailer= require ('nodemailer')

// Corrige la ruta del archivo eliminando una de las instancias de "notifications"
const filePath = path.resolve(__dirname, 'templatePostPatient.html');
const templatePostPatient = fs.readFileSync(filePath, 'utf8');

// console.log(htmlContent);
const templateSend = handlebars.compile(templatePostPatient);




const sendEmailPatient=async({id,name,phone,email,sure})=>{

    const htmlContent = templateSend({id,name,phone,email,sure})

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
        // text: `Bienvenido ${name}, su registro ha sido exitoso ya puede reservar su cita`
        html: htmlContent
    }
    
    
    const transport= nodemailer.createTransport(config)

    const info = await transport.sendMail(message)
    // console.log(info);
}

module.exports = sendEmailPatient