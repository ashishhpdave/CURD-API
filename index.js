const express = require('express')
const router = require('./router')
const app = express()
const port = 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.listen(port,function(){
    console.log(`http://localhost:${port}`)
})