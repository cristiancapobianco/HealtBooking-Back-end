const mockDoctors= require('../../assets/data/mockDoctors.json')
const {DoctorSure,Doctor,Sure,Specialty}= require('../../db')

const loadRelationships= ()=>{
    const sureAndSpecialty= mockDoctors.doctors.map((doctor)=>{
        return{
            id:doctor.license,
            specialty:doctor.specialty,
            sure:doctor.arraySure,
        }
    })

    const loadRelations= sureAndSpecialty.map(async(doctor)=>{
        const doctorExist= await Doctor.findOne({where: {id: doctor.id}})

        if(doctorExist){
            doctor.sure.map(async sure => {
                const sureMedic = await Sure.findOne({where: {name: sure}})
                if (sureMedic) {
                  await DoctorSure.create({ DoctorId: doctorExist.id, SureId: sureMedic.id });
                }
              });
            const specialtyId = await Specialty.findOne({where:{name:doctor.specialty}})
           await doctorExist.setSpecialty(specialtyId);
        }
    })

    return loadRelations
}

module.exports= loadRelationships