var colors = require('colors');
var request = require('request');
var constants = require('../lib/na_string_constants');

//var test_api_key = process.argv[2];

console.log('Valor...TO ME!'.cyan);
function Valor(key){
	this.api_key = key;
}

Valor.prototype.getChampions = function( id, cb){
	//Check if user has gave an id number if not then return list of all champions
	console.log(constants.champions + '?api_key='+ this.api_key);
	if (id ===  undefined){
		request(constants.champions + '?api_key='+ this.api_key, function (error, response, body) {
	    	if (!error && response.statusCode == 200) {
	    		console.log(JSON.parse(body));
	    	 	cb(null,JSON.parse(body));
	   		}
				else{
					console.log(error);
				}
  		});
  	}
  	else{
   	request(constants.champions+'/'+ id +'?api_key='+ this.api_key, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	console.log(JSON.parse(body));
	     cb(null,JSON.parse(body));
	   	}
			else{
				console.log(error);
			}
    });
  	}
};

Valor.prototype.getSummonerByName = function(name, cb){
	request(constants.summoner + 'by-name/' + name + '?api_key=' + this.api_key, function (error, response, body) {
		if(!error && response.statusCode == 200) {
			//console.log(JSON.parse(body));
			cb(null,JSON.parse(body));
		}
		else{
			//console.log(error);
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerById = function(id, cb) {
	request(constants.summoner + id + '?api_key=' + this.api_key, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			//console.log(body);
			cb(null,JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

// @TODO parse the body to get relevant info
Valor.prototype.getSummonerMasteries = function(id, cb) {
	request(constants.summoner + id + '/masteries?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200) {
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

//I dont understand this one...why not just use getSummonerById and parse the results? I'll leave it as TODO if someone requests it.
//Til then please just parse getSummonerById for the name.
///api/lol/{region}/v1.4/summoner/{summonerIds}/name
// Valor.prototype.getSummonerNameById = function(arguments) {
// 	// body...
// }

// @TODO parse the body to get relevant info
Valor.prototype.getSummonerRunes = function(id, cb) {
	request(constants.summoner + id + '/runes?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200) {
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};


Valor.prototype.getRankedStats = function(id, cb) {
	request(constants.stats + id + '/ranked?SEASON4&api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200) {
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerSummary = function(id, cb) {
	request(constants.stats + id + '/summary?season=SEASON4&api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	})
};

Valor.prototype.getRecentGame = function(id, cb) {
	request(constants.game + id + '/recent?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerLeague = function(id, cb) {
	request(constants.league + id + '?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerLeagueEntry = function(id, cb) {
	request(constants.league + id + '/entry?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.challengerRankings = function(cb) {
	request(constants.challenger + this.api_key, function(error, response, body){
		if(!error && response.statusCode == 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.championData = function(cb) {
	request(constants.staticChampion + '?api_key=' + this.api_key, function(error, response, body){
		if (!error && response.statusCode == 200){
			cb(null, JSON.parse(body));
		}
		else{

			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

module.exports =  Valor;
