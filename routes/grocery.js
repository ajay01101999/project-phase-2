const groceryModel = require('../db/models/groceryModel');
const express = require('express');
const fs = require('fs');
const path = require('path');

const groceries = JSON.parse(fs.readFileSync(path.normalize(__dirname+'/../json/groceries.json')));

const router = express.Router();


router.get('/',async (req, res)=>{
    try{
        // const gro = groceryModel.create(groceries);
        // const phone = await groceryModel.find({'specs.boxContent': 'Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation'});
        if(req.query.name === 'grocery'){
            const grocery = await groceryModel.find({});
            return res.send(grocery);
        }else{
            const grocery = await groceryModel.find({latest: true});
            res.send(grocery);
        }
    }catch(err){
        res.send(err)
    }
})

router.get('/:id',async (req, res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const product = await groceryModel.find({id: id});
    res.send(product);
})

module.exports = router;