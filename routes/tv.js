const express = require('express');
const fs = require('fs');
const path = require('path');
const tv = require('../db/models/tvModel');

const television = JSON.parse(fs.readFileSync(path.normalize(__dirname+'/../json/television.json')));

const router = express.Router();

router.get('/',async (req, res)=>{
    try{
        // tv.create(television);
        // const phone = await phoneModel.find({'specs.boxContent': 'Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation'});
        if(req.query.name === 'tv'){
            const t = await tv.find({});
            res.send(t);
        }
    }catch(err){
        res.send(err)
    }
})

router.get('/:id',async (req, res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const product = await tv.find({id: id});
    res.send(product);
})

module.exports = router;