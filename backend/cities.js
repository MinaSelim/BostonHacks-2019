const googleApi = require('./googleApiInterface');
const mongo = require("./database.js");

function sleep(delay) {
   var start = new Date().getTime();
   while (new Date().getTime() < start + delay);
}

const cities = [
   "Acton", "Andover", "Athol",
   "Becket", "Bellingham", "Blandford",
   "Boxborough", "Braintree", "Boston",
   "Chelsea", "Cummington", "Foxborough",
   "Hancock", "Mattapoisett", "New Braintree",
   "New Salem", "Tyngsborough", "Wellesley",
   "Worthington", "Whately"
];

const travelModes = [
   "bicycling", "driving", "walking", "transit"
];

const chooseTwoCities = () => {
   let x = Math.random() * cities.length;
   let y = -1;
   x = Math.floor(x);
   do {
      y = Math.random() * cities.length;
      y = Math.floor(y);
   } while (x == y);

   return [x, y];
}
const chooseTravelMode = () => {
   let x = Math.random() * travelModes.length;
   x = Math.floor(x);

   return x;
}

const addUser = (id, day) =>
{
   let indices = chooseTwoCities();
   let travelModeIndex = chooseTravelMode();

   googleApi.getDirectionsBetweenTwoLocations(cities[indices[0]], cities[indices[1]], travelModes[travelModeIndex])
      .then((json) => {
         json.timestamp = day;
         json.mode = travelModes[travelModeIndex];
         console.log(json);
         mongo.setData(id.toString(), json)
      })
}

module.exports.addUsersToDatabase = () => {
   let i = 4;

   let dayOffSet = 1;
   let bool = true;
   while (dayOffSet < 366) {
      {
            addUser(i, dayOffSet);
            dayOffSet += Math.floor(Math.random() * 5);            
         
      }

   }


}