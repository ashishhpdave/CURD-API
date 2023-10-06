const {dbmodel} = require('../../module.js')
async function update(req,res){
    try{
        const isUpdate = await dbmodel.updateOne({ email : req.body.email,password : req.body.password,age : req.body.age })
        if(!isUpdate.modifiedCount){
            throw new Error("Data not updated ")
        }
        res.status(200).json({
            status : true
        }) 
    }catch(error){
        res.status(409).json({
            status : false,
            msg : error.message
            
        })
    }
}

module.exports = update