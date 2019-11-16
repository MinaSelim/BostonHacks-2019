var keys = require('./keys.js');

var authToken = keys.TWILIO_AUTH_TOKEN;
var accountSid = keys.TWILIO_ACCOUNT_SID;
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = function(message){
    
   return client.messages.create({
        body: message,
        to: keys.PHONE_NUMBER,  // Text this number
        from: '+12055574421' // From a valid Twilio number
    })
    
}