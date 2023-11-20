const mockDoctors= require('../../assets/data/mockDoctors.json')
const {Doctor}= require('../../db')

const loadDbDoctor=async()=>{
    const doctors = mockDoctors.doctors.map((doctor)=>{
       
        return {
            id: doctor.license,
            name: doctor.name,
            phone: doctor.phone,
            email: doctor.email,
            profilePicture: doctor.profilePicture
        }
    })
    console.log(doctors);
    const loadDoctors= await Doctor.bulkCreate(doctors)
    console.log(loadDoctors);
    return loadDoctors;
}

module.exports=loadDbDoctor