const express = require('express')
const rutas = express.Router()
const mysql = require('mysql')
const configMysql = {
    host: 'localhost',
    user: 'admin',
    password: 'manuel',
    database: 'agenda'
}
const conectMysql = mysql.createConnection(configMysql)

rutas.get('/', (req, res) => {
    res.render('pages/home', { nombre: 'Manuel' })
})

rutas.get('/formulario', (req, res) => {
    res.render('pages/formulario')
})

rutas.get('/contactos', (req, res) => {
    const query = 'SELECT * FROM agenda_personal'
    conectMysql.query(query, (err, result, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.render('pages/contactos', { data: result })
        }
    })
})


rutas.post('/add', (req, res) => {
    const { nombre } = req.body
    const { telefono } = req.body
    const query = `INSERT INTO agenda_personal (nombre, telefono) VALUES ('${nombre}', ${telefono})`
    conectMysql.query(query, (err, result, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/contactos')
        }
    })

})





module.exports = rutas