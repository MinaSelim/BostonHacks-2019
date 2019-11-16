const fetch = require('node-fetch');
const keys = require("./keys")



module.exports.getDirectionsBetweenTwoLocations = (origin, destination) => {

   let og = origin.replace(" ", "+");
   let dest = destination.replace(" ", "+")

   let formattedRequest = "https://maps.googleapis.com/maps/api/directions/json?origin=" + og +"&destination=" +
   dest + "&key=" + keys.GOOGLE_API_KEY;
   return fetch(formattedRequest, {method: "post"})
   .then(res => res.json());
   
}