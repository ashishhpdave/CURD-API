const {dbmodel} = require("../../module.js")

async function signin(req,res){
    try{
        const isExist = await dbmodel.findOne({email : req.body.email,password:req.body.password})
        if(!isExist){
            throw new Error ("data not exist")
        }
        res.status(200).json({
          msg : "login success",
            status : true, 
            data : isExist
        })
    }catch(err){ 
    
        res.status(409).json({
            stutas : false,
            msg : err.message
        })
    }
}

module.exports = signin


// LOGIN