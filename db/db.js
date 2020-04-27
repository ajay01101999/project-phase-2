const mongoose = require('mongoose');

const mongo = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017',{
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('mongo is connected');
    }catch(err){
        console.log('error occured whilr connecting', err);
    }
}

module.exports = mongo;