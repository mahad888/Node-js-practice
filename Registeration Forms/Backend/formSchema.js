const validator = require('validator');
const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
     
        
    },  

    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
     
        
    },  
    
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8,
       
    },
    confirmpassword:{
        type: String,
        required: true,
        trim: true,
        minlength: 8,
       
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    age:{
        type: Number,
        required: true,
        trim: true,
        validator(value) {
            if(value < 13){
                            throw new Error('Age must be greater than 13');
                        }
                    }
       
    },
    gender:{
        type: String,
        required: true,
        trim: true,
    },    
    phone:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength:  11,
    }    
       
});

const Register = mongoose.model('Register',mySchema);
module.exports = Register;