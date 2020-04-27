const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const EventModel = require('../db/models/eventModel');
var email = '';

router.post('/',(req, res)=>{
    email = req.body.email;
    EventModel.create({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    }).then(res=>res).catch(err=>console.log(err));

    setTimeout(()=>{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'absharma8384@gmail.com',
              pass: 'abs@8384'
            }
          });
          
          var mailOptions = {
            from: 'absharma8384@gmail.com',
            to: req.body.email,
            subject: 'Event reminder',
            html: `<h2>REMINDER!!!</h2><h1>${req.body.name}</h1><p>team,<br/>Universal</p>`        
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    },req.body.time)
})

router.get('/',(req, res)=>{
    console.log(email);
    EventModel.findOne({email: email}).exec((err,doc)=>{
          if (err) {
              res.send(err);
          }
          else res.send(doc);
  });
})

module.exports = router;