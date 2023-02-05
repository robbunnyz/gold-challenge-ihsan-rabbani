const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const usersRoute = require('./route/user.route')
const itemsRoute = require('./route/item.route')

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs')
app.use('/users', usersRoute)
app.use('/items', itemsRoute)

// app.get('/', (req, res, next) => {
//     res.render('home')
// })

// app.get('/register', (req, res, next) => {
//     res.render('register')
// })

// app.get('/login', (req, res, next) => {
//     res.render('login')
// })

app.listen(port, () => {
    if (process.env.ENV == 'DEV') {
        console.log(`THIS IS DEV`)
    } else if (process.env.ENV == 'PROD') {
        console.log(`THIS IS PROD`)
    } else {
        console.log(`CANNOT READ ENV`)
    }
    console.log(`Example app listening on port ${port}`)
})