const {Master} = require("../db")


const postMaster=async(name, email, rol)=>
{
              
    const newMaster= await Master.create({name, email, rol})
    // console.log(newMaster)
    return newMaster
                
}

module.exports= postMaster