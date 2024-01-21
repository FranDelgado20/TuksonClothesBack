const mongoose = require ('mongoose')
try {
    mongoose.connect(process.env.MONGO_CONNECT).then('Servidor en linea')
} catch (error) {
    console.log('No se pudo conectar al servidor', error)
}