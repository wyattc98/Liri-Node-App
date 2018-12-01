//NPM packages
require("dotenv").config();
var moment = require("moment")
var request = require("request");
var spotify = require("./keys.js")

//var bandsintown = new Bandsintown(keys.bandsintown)
//var omdb = new Omdb(keys.omdb)
var fs = require("fs")

var userCommand = process.argv[2]
var userInput = []

for(var i = 4; i < process.argv.length; i++){
    userInput += "+" + process.argv[i]
}


if(userCommand === "spotify-this"){

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  })};








