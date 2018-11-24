//NPM packages

var request = require("request");
var spotifyNode = require("node-spotify-api")
var moment = require("moment")
var dotenv = require("dotenv")
var inquirer = require("inquirer")

var userCommand = process.argv[2];
var userInput = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    userInput + "+" + process.argv[i];
}

//API calls

//Takes in song title and returns song info
var spotify = function (userInput) {
    console.log(userInput)
    new spotifyNode({
        id: "5c1d835f36e044f5ba6763a785b09b7b",
        secret: "5f7ad49552c74500b75de62c772dd2f3",
    })
    spotify
        .request('https://api.spotify.com/v1/tracks/')
        .then(function (data) {
            console.log(data);
        }
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        }))
}
//Should take in User Input and search omdb for results
var omdbAPI = {
    apikey: "trilogy",
    url: "http://www.omdbapi.com/?apikey=" + apikey + "&t=" + userInput
}.then(function (response) {
    console.log(response)
})
//Take in artist and return upcoming show near you
var bandsintown = {
    artistname: userInput,
    app_id: "7f0adce3b7216e5576b78e50ed53789a",
    date: "2018-11-20"
}.then(function (response) {
    console.log(response)

});

//Switch statement for selecting which api will be used
function mySwitch(userCommand) {
    switch (userCommand) {
        case "spotify":
            spotify();
            break;
        case "movie":
            omdbAPI();
            break;
        case "concert":
             bandsintown()
             break;

    }


}

mySwitch(userCommand);
console.log(userCommand)
console.log(userInput)


