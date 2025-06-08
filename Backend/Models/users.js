const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique : true,
        trim: true,
        lowercase: true,
    },
    password:{
        type:String,
        required: true
    }

},{timestamps:true});

// create collection 
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
