require('dotenv').config()
require('./database/config')
const Server = require('./Server/app')
const server = new Server()
server.listen()