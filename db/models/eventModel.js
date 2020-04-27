const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    id:{
        type:Number,
        require: [true, 'id is required']
    },
    name:{
        type:String,
        required: [true, 'Name is required'] 
    },
    email:{
        type:String,
        required: [true, 'email is required'],
    },
    date:{
        type: Date,
        default: Date.now(),
        required: [true, 'password is required']
    },
    time:{
        type: Number,
        required: [true, 'time is required']
    }
});

const EventModel = new mongoose.model('Events', EventSchema);

module.exports = EventModel;