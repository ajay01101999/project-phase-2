const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required'] 
    },
    email:{
        type:String,
        required: [true, 'email is required']
    },
    password:{
        type:String,
        required: [true, 'password is required']
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

const UserModel = new mongoose.model('Users', UserSchema);

module.exports = UserModel;