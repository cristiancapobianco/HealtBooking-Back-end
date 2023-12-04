const mockMaster = require('../../assets/data/mockMaster.json')
const postMaster= require ('../postMaster')


const loadDbMaster= ()=>{
    
    const newMaster= mockMaster.master.map(async (master)=>{
        await postMaster(master.name, master.email, master.rol)
    })
  
    return newMaster;
}

module.exports = loadDbMaster
