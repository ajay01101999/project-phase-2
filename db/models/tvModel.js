const mongoose = require('mongoose');

const TvSchema = mongoose.Schema([
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        size:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price: String,
        colour:String,
        description:String
    }
])

const TvModel = new mongoose.model('Tv', TvSchema);

module.exports = TvModel;