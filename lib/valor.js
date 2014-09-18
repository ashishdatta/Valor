var colors = require('colors');
var request = require('request');
var constants = require('../lib/na_string_constants');

//var test_api_key = process.argv[2];

console.log('Valor...TO ME!'.cyan);
function Valor(key){
	this.api_key = key;
}

Valor.prototype.getChampions = function(id, cb){
	//Check if user has gave an id number if not then return list of all champions
	if (id ===  undefined){
		request(constants.champions + '?api_key='+ this.api_key, function (error, response, body) {
	    	if (!error && response.statusCode == 200) {
	    		console.log(JSON.parse(body));
	    	 cb(null,JSON.parse(body));

	   		}
  		});
  	}
  	else{
   	request(constants.champions+'/'+ id +'?api_key='+ this.api_key, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	//console.log(JSON.parse(body));
	     cb(null,JSON.parse(body));
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
			cb(null,JSON.parse(body));
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
			cb(null,JSON.parse(body));
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
			cb(null, JSON.parse(body));
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
			cb(null, JSON.parse(body));
		}
	});
};






module.exports =  Valor;
