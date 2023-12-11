const { Doctor } = require("../db");

const patchReviewDoctor = async (idDoctor, score) => {
  
  try {
    const doctor = await Doctor.findByPk(idDoctor);
    

    if (doctor) {
      const updateReviews = {
        count: doctor.reviews.count + 1,
        acum: doctor.reviews.acum + score,
        average: Number((doctor.reviews.acum + score) / (doctor.reviews.count + 1)).toFixed(2),
      };

      const updateDoctor = await doctor.update({ reviews: updateReviews  });

      // return res.status(200).send('Reviews updated');
    } else {
      // return res.status(400).send("Doctor not found");
    }
  } catch (error) {
   
    // return res.status(500).send({ message: "Server error updating doctor" })
  }
};
module.exports = patchReviewDoctor;
