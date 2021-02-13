const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rutas = require('./rutas')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.use(bodyParser.json())
app.use(rutas)


app.listen('3000', (req, res) => {
    console.log(`aplicación funcionando en http://localhost:3000`)
})