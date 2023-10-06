const exp = require('express')
const welcome = require('./controller/welcome')
const signin = require('./controller/signein')
const signup = require('./controller/signup')
const update = require('./controller/update')

const route = exp.Router()

route.get('/', welcome)
route.post('/signin', signin)
route.post('/signup', signup)
route.post('/update', update)

module.exports = route
