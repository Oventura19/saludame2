const express = require('express')
const app = express()

app.get('/makers/:nombre', (req, res) => {
    if (req.params.nombre) {
        res.send("<h1>Hola " + req.params.nombre.string.charAt(0).toUpperCase() + "!</h1>");
    } else {
        res.send("<h1>Hola desconocido!</h1>");
    }
})

app.listen(3000)
