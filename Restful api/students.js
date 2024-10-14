const validator = require('validator');
const mongoose = require ('mongoose');

const mySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,

    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 30,
    
    } ,
    email:{
        type: String,
        required: true,
        trim: true,
        unique: [true,"Email already in use"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        } 
    } ,
    phone:{
        type: String,
        required: true,
        trim: true,
        unique: [true,"Phone already in use"],
        min:11,
        max:11
    },
    
    address:{
        type: String,
        required: true,
        trim: true,
    } ,
    data:{
        type: Date,
        default: Date.now
    }       
})

const Student = new mongoose.model("student",mySchema);

module.exports = Student;