const MongoClient = require('mongodb').MongoClient;
const keys = require("./keys.js");
const algo = require("./algo.js");
const url = "mongodb+srv://" + keys.MONGOUSER + ":" + keys.MONGOPWD + "@userdata-6pif4.gcp.mongodb.net/test?retryWrites=true&w=majority"
const travelMode = require('./travelmode');

module.exports.setData = (user, userObj) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("Users");
        dbo.collection(user).insertOne(userObj, function (err, res) {
            if (err) throw err;
            console.log("data inserted");
            db.close();
        });

    });
};

module.exports.getData = (user, res) => {
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;
        const dbo = db.db("Users");
        dbo.collection(user).find({}).toArray(function (err, result) {
            if (err) throw err;
            result = toArray(result);
            xvars = [];
            yvars = [];
            for(var i = 0; i<result.points.length; i++){
                xvars.push(result.points[i][0]);
                yvars.push(result.points[i][1]);
            }
            result = {
                "footprint": yvars,
                "timestamp": xvars,
                "equation": result.equation
            }
            res.send(result);
            db.close();
        });
    });

};

module.exports.getTravelModeCount = (user, res) => {
    MongoClient.connect(url, function(err, db){
        if (err) throw err;
        const dbo = db.db("Users");
        dbo.collection(user).find({}).toArray(function (err, result) {
            if (err) throw err;
            result = travelMode.travelModeCount(result);
            res.send(result);
            db.close();
        });

    })
}

function toArray(results) {
    const xyarr = [];
    for (let i = 0; i < results.length; i++) {
        try {
            let distance = (results[i].rows[0].elements[0].distance.text).replace(",", "");
            distance = parseFloat(distance);
            if(results[i].mode == 'driving'){
                distance = algo.carCO2(distance);
            }
            if(results[i].mode == 'walking' || results[i].mode == 'bicycling'){
               distance = algo.walkCO2(distance);
            }
            if(results[i].mode == 'transit'){
                distance = algo.ptCO2(distance);
            }
            let timestamp = results[i].timestamp;
            xyarr.push([timestamp, distance])
        } catch (err) {
            continue;
        }
    }

    return algo.getRegression(xyarr);
}
//car challenges
//load page
//