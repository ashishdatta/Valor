var colors = require('colors');
var request = require('request');
request('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/cowwalker?api_key=107c7d5d-8f88-4e60-b55e-259c5ef12029', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
console.log('It is happening'.cyan);