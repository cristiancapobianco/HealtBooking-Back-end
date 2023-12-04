const {Router}= require('express')

const { getAllAppointments } = require('../controllers/getAllAppointments');
const { getSpecialty } = require('../controllers/getSpecialty');
const { getSure } = require('../controllers/getSure');
const handlerPostMaster = require('../handlers/hanlderPostMaster');
const { getAllUsers } = require('../controllers/getAllUsers');
const { changeStatus } = require('../controllers/toggleAccount');
const { updateDoctor } = require('../controllers/updateDotor');
const { postDoctor } = require("../controllers/postDoctor")

const masterRouter=Router();

// URl_Base + /master/

masterRouter.get('/appointment',getAllAppointments) //traer todas las citas

masterRouter.get('/specialty', getSpecialty); //todas las especialidades

masterRouter.get('/sure', getSure); //todas las obras sociales

masterRouter.post('/', handlerPostMaster) // crear un nuevo usuario master

masterRouter.patch('/toggle/:idUser', changeStatus) //modificar el estado de un usuario, borrado logico

masterRouter.patch('/doctor/:idDoc', updateDoctor) //modificar datos del doctor

masterRouter.post('/doctor', postDoctor); //crear un nuevo doctor

masterRouter.get('/', getAllUsers); //* todos los usuarios

module.exports=masterRouter
