const app = require("./src/app");
const loadDbDoctor = require("./src/controllers/loadDb/loadDbDoctor.js");
const loadDbSpecialty = require("./src/controllers/loadDb/loadDbSpecialty");
const loadDbSure = require("./src/controllers/loadDb/loadDbSure.js");
const loadRalationships = require("./src/controllers/loadDb/loadRelationships.js");
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env;

const { Doctor, Specialty, Sure } = require('./src/db.js')

// conn.sync({ altern: true }).then(() => { SI YA ESTA LISTA LA BASE DE DATOS USAR ESTE QUE NO BORRA DATOS



conn.sync({ force: true }).then(() => {
    app.listen(PORT, async () => {
        const countDoctor = await Doctor.count()
        const countSure = await Sure.count()
        const countSpecialty = await Specialty.count()
        if (countDoctor <= 0 && countSure <= 0 && countSpecialty <= 0) {

            await loadDbSure()
            await loadDbSpecialty()
            await loadDbDoctor()
            await loadRalationships()
        }
        console.log(`Server listening on port ${PORT}`);
    })
}).catch(error => console.error(error))







// app.listen(3001, () => {
//     console.log("hola");
// });