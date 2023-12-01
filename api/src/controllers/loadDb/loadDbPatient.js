const mockPatients = require('../../assets/data/mockPatients.json')
const { Patient } = require('../../db')

const loadDbPatient= async ()=>{
    const patients= mockPatients.patients.map((patient)=>{
        return{
            id:patient.id,
            name:patient.name,
            phone:patient.phone,
            email:patient.email,
            rol: patient.rol

        }
    })
    const loadPatients = await Patient.bulkCreate(patients)
    return loadPatients;
}

module.exports = loadDbPatient
