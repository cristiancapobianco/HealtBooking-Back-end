const app = require("./src/app")
const { conn } = require('./src/db.js');
const PORT = 3001;

// conn.sync({ altern: true }).then(() => { SI YA ESTA LISTA LA BASE DE DATOS USAR ESTE QUE NO BORRA DATOS



conn.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
}).catch(error => console.error(error))







// app.listen(3001, () => {
//     console.log("hola");
// });