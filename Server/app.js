const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
    }
    middleware(){
        this.app.use(express.json())
        this.app.use(morgan('dev'))
        this.app.use(cors())
    }
    routes(){
        this.app.use('/user', require('../Routes/usuarios'))
        this.app.use('/products', require('../Routes/productos'))
    }listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('linea')
        })
    }
}

module.exports = Server