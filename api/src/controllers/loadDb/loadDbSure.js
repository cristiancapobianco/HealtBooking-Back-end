const mockSure= require('../../assets/data/mockSure.json')
const {Sure}= require('../../db')

const loadDbSure=async()=>{

    const loadSure = await Sure.bulkCreate(mockSure.sure)

    return loadSure;
}

module.exports=loadDbSure