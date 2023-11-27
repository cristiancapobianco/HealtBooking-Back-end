const mockDoctors= require('../../assets/data/mockDoctors.json')
const {Doctor}= require('../../db')

const loadDbDoctor=async()=>{
    const doctors = mockDoctors.doctors.map((doctor)=>{
       
        return {
            id: doctor.license,
            name: doctor.name,
            phone: doctor.phone,
            email: doctor.email,
            profilePicture: doctor.profilePicture,
            password: doctor.password,
            price:doctor.price
        }
    })
    const loadDoctors= await Doctor.bulkCreate(doctors)
    return loadDoctors;
}

module.exports=loadDbDoctor