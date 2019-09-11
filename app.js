const express = require('express')
const app = express()

function MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get('/makers/:nombre', (req, res) => {
    if (req.params.nombre) {
        res.send("<h1>Hola " + req.params.nombre.MaysPrimera(nombre.toLowerCase()); + "!</h1>");
        
    } else {
        res.send("<h1>Hola desconocido!</h1>");
    }
})

app.listen(3000)
