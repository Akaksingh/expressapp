const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {type : String, unique: true, required : true},
    email : {type : String, unique: true, required : true},
    password : {type : String, required : true},
    full_name : {type : String},
    bio : {type : String},
    profile_image_url: {type : String},
    location : {type : String},
    created_at : {type : Date, default : true}
})