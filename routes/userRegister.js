const express = require('express');

const UserModel = require('../db/models/model');

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/',[
    check('name', 'name is required').isString(),                                                  //user validation
    check('email', 'enter a valid email').isEmail(),
    check('password', 'password should have greater the 6 characters').isLength({min:6})
    ],
    async (req, res)=>{
        const error = validationResult(req);  
        console.log(req.body);                                 //checking user is valid or not
        if(!error.isEmpty()){
            return res.json({
                "message": "invalid field inputs",
                "status": "400",
                error: error.array()
            });
        }
        
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email:email });                 //checking if user is already existed
        if(user){
            return res.json({
                "message": "user already existed",
                "status": "404"
            })
        }
        bcrypt.hash(password, 10, (err, hash)=> {                             //hashing the password                          
            if(err){
                console.log(err);
            }else{
                UserModel.create({                                            //storing data in db
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    date: req.body.date
                })
            }
        });
        res.status(200).json({
            "message": "success",
            "status": "ok",
            "data": req.body
        });                                        //api response
})

module.exports = router;