const postMaster = require("../controllers/postMaster")
const {Master} = require("../db")


const handlerPostMaster=async(req, res)=>{

    const {name, email, rol}= req.body

    const existEmail= await Master.findOne({where:{
        email: email
    }})

    
    if(existEmail){
        res.sed({message:'Existing master'})
    }
    else{

        try {
            const newMaster= await postMaster(name, email, rol)
            
            res.status(200).send({ message: "Master created", newMaster })
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    



}   

module.exports = handlerPostMaster