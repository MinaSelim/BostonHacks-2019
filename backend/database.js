const MongoClient = require('mongodb').MongoClient;
const keys = require("./keys.js");

const url = "mongodb+srv://"+keys.MONGOUSER+":"+keys.MONGOPWD+"@userdata-6pif4.gcp.mongodb.net/test?retryWrites=true&w=majority"


module.exports.setData = (user, userObj) => {
    MongoClient.connect(url, function (err,db) {
        if (err) throw err;
        const dbo = db.db("Users");
        dbo.collection(user).insertOne(userObj, function(err, res){
            if (err) throw err;
            console.log("data inserted");
            db.close();
        });

    });
};

module.exports.getData = (user, res) => {
    MongoClient.connect(url, function(err, db) {

        if (err) throw err;
        const dbo = db.db("Users");
        dbo.collection(user).find({}).toArray(function(err, result) {
            if (err) throw err;
            toArray(result);
            res.send(result);
            db.close();
        });
    });

};

function toArray(results){
    const xyarr = [];
    console.log(results);
    for(let i = 0; i<results.length; i++){
        let distance = (results[i].rows[0].elements[0].distance.text).replace(",","");
        let timestamp = results[i].timestamp;
        xyarr.push([timestamp, distance])
    }
    return xyarr;
}

