const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://flu:boston12345@userdata-6pif4.gcp.mongodb.net/test?retryWrites=true&w=majority"


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
            res.send(result)
            db.close();
        });
    });

};