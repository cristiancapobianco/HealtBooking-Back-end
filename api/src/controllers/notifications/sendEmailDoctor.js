const handlebars = require('handlebars'); 
const fs = require('fs');
const path = require('path');
const nodemailer= require ('nodemailer')

const filePath = path.resolve(__dirname, 'templatePostDoctor.html');
const templatePostDoctor  = fs.readFileSync(filePath, 'utf8');

// console.log(htmlContent);
const templateSend = handlebars.compile(templatePostDoctor);


const sendEmailDoctor=async({id,name,phone,email,specialty,price,sure})=>{

    const htmlContent = templateSend({id,name,phone,email,specialty,price,sure})
    
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
        subject: 'Registro doctor',
        // text: `Bienvenido ${name} al Staff de HEALTBOOKING en la especialidad ${specialty}`
        html:htmlContent
    }
    const transport= nodemailer.createTransport(config)

    const info = await transport.sendMail(message)
    // console.log(info);
    // console.log({id,name,phone,email,specialty,price,sure});
}

module.exports = sendEmailDoctor