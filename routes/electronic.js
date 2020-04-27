const phoneModel = require('../db/models/phonesModel');
const express = require('express');
const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.normalize(__dirname+'/../json/categories.json')));

const router = express.Router();


router.get('/',async (req, res)=>{
    try{
        console.log(req.query)
        // const product = phoneModel.create(products);
        // const phone = await phoneModel.find({'specs.boxContent': 'Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation'});
        if(req.query.name === 'phones' || req.query.sort==='price'){
            const phone = await phoneModel.find({});
            if(req.query.name === 'phones' && req.query.sort==='price'){
                console.log(req.query)
                const phone1 = await phoneModel.find({}).sort('price');
                return res.send(phone1);
            }
            res.send(phone);
        }
        // else if(req.query.sort === 'price'){
        //     return res.send(phoneModel.find({}).sort({price}))
        // }
        else {
            const phone = await phoneModel.find({latest: true});
            res.send(phone);
        }
    }catch(err){
        res.send(err)
    }
});

router.get('/:id',async (req, res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const product = await phoneModel.find({id: id});
    res.send(product);
})

module.exports = router;