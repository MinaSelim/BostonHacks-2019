const express = require("express");
const bodyParser = require("body-parser")
const googleApi = require("./googleApiInterface")
const server = express();

server.set('port' , (process.env.PORT || 8080) )

server.get('/secure*', function(req, res)
{
    res.send("You requested a secure ressource without the proper access");

});

server.use(
   bodyParser.urlencoded({
     extended: true
   })
 )
 
server.use(bodyParser.json())
server.use('/ressources', express.static('ressources'));
server.use('/Images', express.static('ressources'));
server.use('/css' , express.static('css'));
server.use('/scripts' , express.static('scripts'));
server.use('/fonts' , express.static('fonts'));
server.use('/js' , express.static('scripts'));
server.use('/img', express.static('ressources'));

server.get('/', function(req, res)
{
    res.send("index");
});

server.post('/directions', function(req, res)
{
   console.log(req.body);

   const origin = req.body.origin;
   const destination = req.body.destination;

    googleApi.getDirectionsBetweenTwoLocations(origin, destination).then((json) => {
       res.send(json);
    })
});


server.listen(server.get('port'), function()
{
    console.log('listening to port ' + server.get('port'));
});