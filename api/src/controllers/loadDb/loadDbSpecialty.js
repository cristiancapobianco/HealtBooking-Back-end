const mockSpecialty= require('../../assets/data/mockSpecialty.json')
const {Specialty}= require('../../db')

const loadDbSpecialty=async()=>{

    const loadSpecialty = await Specialty.bulkCreate(mockSpecialty.specialty)

    console.log(loadSpecialty);

    return loadSpecialty;
}

module.exports=loadDbSpecialty