const mockPatients= require ('../../assets/data/mockPatients.json')
const {Patient,Sure}= require ('../../db')

const loadPatientSure= () => {

    const patientSure= mockPatients.patients.map((patient)=>{
        return{
            id:patient.id,
            sure:patient.sure
        }
    })

    const loadRelations= patientSure.map(async(patient)=>{
        const patientExist= await Patient.findOne({where:{id: patient.id}})
        const sureMedic=await Sure.findOne({where:{name: patient.sure}})

        if(patientExist && sureMedic){
            patientExist.setSure(sureMedic)
        }

    })
    return loadRelations

}   

module.exports = loadPatientSure
