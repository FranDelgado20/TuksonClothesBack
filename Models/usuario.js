const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },
   
    email:{
        type:String,
        required: true,
        unique: true
    },
    pass:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    city:{
        type:String,
        default:''
    },
    zip:{
        type:String,
        default:''
    },
    numberPhone:{
        type:String,
        default:'',
        unique: true
    },
    domicile:{
        type:String,
        default:''
    }
    

   
    
    
})

UserSchema.methods.toJSON = function() {
    const {__v, pass, ...user} = this.toObject()
    return user
}
const ModeloUsuario = mongoose.model('usuarios', UserSchema)


module.exports = ModeloUsuario