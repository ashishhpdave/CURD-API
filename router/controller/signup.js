const {dbmodel} = require('../../module.js')

async function signup(req,res){
    try{
        const useData = new dbmodel({
          
            email:req.body.email,
            password : req.body.password
            
        })
        const isSave = await useData.save()
        if(!isSave){
            throw new Error("somthing was wornge")
        }
        res.status(200).json({
       
            email : req.body.email,
            password:req.body.password
           
          
        })
    }catch(error){
        res.status(501).json({
            msg : error.message
        })
    }
}

module.exports = signup