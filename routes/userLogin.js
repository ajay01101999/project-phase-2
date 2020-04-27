const express = require('express');

const UserModel = require('../db/models/model');

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/',[
    check('name').isString(),                                                  //user validation
    check('email').isEmail(),
    check('password').isLength({min:6})
    ],
    async (req, res)=>{
        const error = validationResult(req);                                   //checking user is valid or not
        if(!error.isEmpty()){
            return res.status(400).json(error.array());
        }
        
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });                 //checking if user is already existed
        if(!user){
            return res.status(400).json({
                "message": "invalid username or password",
                "status": "400"
            })
        }
        console.log(password,JSON.stringify(user.password));
        bcrypt.compare(password, user.password, (err, result)=>{
            if(err){
                console.log('not compared', err);
            }else if(result){
                return res.status(200).json({
                    "message": "success",
                    user
                })
            }else{
                res.status(400).json({
                    "message": "password is incorrect",
                    "status": "400"
                })
            }
        });
        // res.status(200).json(user);
})

module.exports = router;