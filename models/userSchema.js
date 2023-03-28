const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid email address")

            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        maxlength:10

    },
    password:{
        type:String,
        required:true,
        minlength:8

    },
    cpassword:{
        type:String,
        required:true,
        minlength:8
    },
    
    

});

const USER = new mongoose.model("USER",userSchema);

module.export = USER;