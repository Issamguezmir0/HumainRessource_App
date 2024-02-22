const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },

    password: {
        type:String,
        required:true,
        
    },

    prenom: {
        type:String,
        required:true
    },

    nom: {
        type:String,
        required:true
    },

    dateNaissance: {
        type:Date,
        required:true
    },

    numTelephone: {
        type: Number,
        required: true
    },

    cin: {
        type:String,
        required:true
    },

    date_cin: {
        type:Date,
    },
    
    adresse: {
        type:String,
    },

    ville: {
        type:String,
    },

    pays: {
        type:String,
    },

    experience: {
        type:String,
    },

    skills: {
        type: String,
    },

    role: {
        type: String,
        required: true
    },

    sexe: {
        type: String,
        required: true
    },

    fonction: {
        type:String,
        required:true
    },

    date_rec: {
        type:Date ,
    },

    soldeConges: {
        type:Number,
        required:false,
        default: 30
    },

    salaire: {
        type:Number,
        required:false
    },

    ID_CNSS: {
        type: String,
        required: false
    },

    nbEnfants: {
        type: Number,
        required: false
    },

    statutConjuguale: {
        type: String,
        required: false
    },

    refreshToken: {
        type:String
    },

    resetLink: {
        data:String,
        default: ''
    },

    versionKey: false
})

// userSchema.methods.toJSON = function() {
//     var obj = this.toObject();
//     delete obj.password;
//     return obj;
// }

mongoose.model('User', userSchema)