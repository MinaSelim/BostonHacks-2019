const db = require('./database');

module.exports.travelModeCount = (jsonArray) => {
    let driving = 0;
    let bicycling = 0;
    let transit = 0;
    let walking = 0;

    for (i = 0; i < jsonArray.length; i++) {
        try{            
            if (jsonArray[i].mode == 'driving') {
                driving++;
            }
            if (jsonArray[i].mode == 'bicycling') {
                bicycling++;
            }
            if (jsonArray[i].mode == 'transit') {
                transit++;
            }
            if (jsonArray[i].mode == 'walking') {
                walking++;
            }
        }
        catch(e){
            continue;
            
        }
    }
    let object = { labels: ["driving", "bicycling", "walking", "transit"], data: [driving, bicycling, walking, transit] } ;
    return object;
    
}
