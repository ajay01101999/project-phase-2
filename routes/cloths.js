const express = require('express');
const fs = require('fs');
const path = require('path');
const cloths = require('../db/models/clothsModel');

const products = JSON.parse(fs.readFileSync(path.normalize(__dirname+'/../json/cloths.json')));

const router = express.Router();

router.get('/',async (req, res)=>{
    try{
        // const cloth = cloths.create(products);
        // const phone = await phoneModel.find({'specs.boxContent': 'Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation'});
        if(req.query.name === 'clothes'){
            const cloth = await cloths.find({});
            res.send(cloth);
        }else{
            const cloth = await cloths.find({latest: true});
            res.send(cloth);
        }
    }catch(err){
        res.send(err)
    }
})

router.get('/:id',async (req, res)=>{
    const id = req.params.id;
    const product = await cloths.find({id: id});
    res.send(product);
})

module.exports = router;