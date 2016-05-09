var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport({service: 'gmail',
  auth: {
    user: 'roy.dajshi@gmail.com',
    pass: 'dajshi123'
  }});
 
// setup e-mail data with unicode symbols 
var sendMail = function(data, res){
	var mailOptions = {
	    from: '"github.io 👥" <barmeshwar.1432@gmail.com>', // sender address 
	    to: 'sonipandey.71@gmail.com', // list of receivers 
	    subject: 'Hello ✔', // Subject line 
	    html: "Hello,<br> You have received a mail from:<br>Name: "+data.Name +"<br>Email: "+ data.Email +"<br>Message: "+ data.Message+"<br>", // plaintext body 
	}
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    return res.send('success');
	    console.log('Message sent: ' + info.response);
	});
};
 


module.exports = function(app, passport){
	// API Server Endpoints
	app.post('/send', function(req, res){
	  // send mail with defined transport object 
	  sendMail(req.body, res);
	})
}
