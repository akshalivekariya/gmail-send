var data = require('../model/usermodel');

var nodemailer = require('nodemailer');


exports.insert = async(req,res) => {

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akshuvekariya15@gmail.com',
      pass: 'juej znuz clnh wbvr'
    }
  });
  var mailOptions = {
    from: 'akshuvekariya15@gmail.com',
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
      res.status(200).json({
        status:"Send Mail"
      })
    }