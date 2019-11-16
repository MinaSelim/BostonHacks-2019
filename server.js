const express = require("express");

const server = express();

server.set('port' , (process.env.PORT || 8080) )

server.get('/secure*', function(req, res)
{
    res.send("You requested a secure ressource without the proper access");

});

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

server.listen(server.get('port'), function()
{
    console.log('listening to port ' + server.get('port'));
});