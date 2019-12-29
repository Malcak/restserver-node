require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// configuración global de rutas
app.use(require('./routes/index.js'));

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}, (err, res) => {
    if (err) {
        throw new err;
    } else {
        console.log('Base de datos desplegada');
    }
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando port:', process.env.PORT);
});