const mongoose = require('mongoose');
const confi = require('../Configuraciones/conf.json')


//recordar cambiar la password

mongoose.connect(`mongodb+srv://pagina:${confi.mongopass}@cluster0.padqs.mongodb.net/test`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('db connected'))
    .catch(err => console.log('error'))