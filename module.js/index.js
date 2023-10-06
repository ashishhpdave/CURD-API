const mongoose = require('mongoose')
const url = 'mongodb://0.0.0.0:27017/LearnFrom'

mongoose.connect(url).then(function(res){
    console.log("connect")
}).catch(function(error){
    console.log(error)
})

const schema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
     
    },
    email : {
        type :String,
        required: true

    },
    password :{
        type : String,
        required : true
    },

    age : {
        type : Number,
        required : true
    },
    address:{
        type : String,
        required : true
    }
})

const dbmodel = new mongoose.model('user',schema)
module.exports = {dbmodel}