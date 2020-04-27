const express = require('express');
const fs = require('fs');
const path = require('path');
const earphone = require('../db/models/earphonesModel');

const earphones = JSON.parse(fs.readFileSync(path.normalize(__dirname+'/../json/earphones.json')));

const router = express.Router();

router.get('/',async (req, res)=>{
    try{
        // earphone.create(earphones);
        // const phone = await phoneModel.find({'specs.boxContent': 'Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation'});
        if(req.query.name === 'earphones'){
            const ear = await earphone.find({});
            res.send(ear);
        }
    }catch(err){
        res.send(err)
    }
})

router.get('/:id',async (req, res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const product = await earphone.find({id: id});
    res.send(product);
})

module.exports = router;