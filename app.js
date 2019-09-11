const express = require('express')
const app = express()

app.get('/makers/:nombre', (req, res) => {
    var name = req.params.nombre;

    function MaysPrimera(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    if (req.params.nombre) {
        res.send("<h1>Hola " + MaysPrimera(req.params.nombre) + "!</h1>");

    } else {
        res.send("<h1>Hola desconocido!</h1>");
    }
})

app.listen(3000)
