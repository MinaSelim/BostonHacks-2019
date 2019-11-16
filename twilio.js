var keys = require('./keys.js');

var authToken = keys.TWILIO_AUTH_TOKEN;
var accountSid = keys.TWILIO_ACCOUNT_SID;
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = function(){
    
    client.messages.create({
        body: 'Hello from Node',
        to: keys.PHONE_NUMBER,  // Text this number
        from: '+12055574421' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}