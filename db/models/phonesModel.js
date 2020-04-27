const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema([
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    },
    {
        id: Number,
        brand: String,
        latest: Boolean,
        name: String,
        imgUrl: String,
        color: String,
        description: String,
        specs: {
            boxContent: String,
            color: String,
            simType: String
        },
        price: String
    }
])

const PhoneModel = new mongoose.model('Phones', PhoneSchema);

module.exports = PhoneModel;