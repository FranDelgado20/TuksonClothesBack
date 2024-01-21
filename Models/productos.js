const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    idProd:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
})
const ModeloProducto = mongoose.model('productos', ProductSchema)


module.exports = ModeloProducto