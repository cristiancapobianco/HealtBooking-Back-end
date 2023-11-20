const mockSure= require('../../assets/data/mockSure.json')
const {Sure}= require('../../db')

const loadDbSure=async()=>{

    const loadSure = await Sure.bulkCreate(mockSure.sure)
    
    console.log(loadSure);

    return loadSure;
}

module.exports=loadDbSure