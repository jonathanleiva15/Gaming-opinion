const mongoose = require('mongoose')
const {
    Schema
} = require('mongoose')

const bcrypt = require('bcryptjs')



// defino esquema para los usuarios
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// metodo para cifrar la password con bcrypt
//documentacion : https://github.com/kelektiv/node.bcrypt.js#readme

UserSchema.methods.encryptPasswords = async (password) =>{
const salt = await bcrypt.genSalt(10)
const hash = bcrypt.hash(password,salt)
return hash
//reminder acordarse que cuando usamos el metodo tenemos que guardar nuevamente la contraseña cifrada en el esquema
//ejemplo: newUSer.password= await newUSer.encryptPassword(password)
}

//bcryp provee un metodo para comparar la contraseña ingresada con la que esta cifrada en la bbdd
UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model('user', user)