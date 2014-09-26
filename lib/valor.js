'use strict';
var colors = require('colors');
var request = require('request');
var constants = require('../lib/na_string_constants');

//var test_api_key = process.argv[2];

function Valor(key){
	this.api_key = key;
}

Valor.prototype.getChampions = function(region, cb){
	console.log('Valor..TO ME all champions '.cyan);
	request('https://'+region+constants.champions + '?api_key='+ this.api_key, function (error, response, body) {
	    	if (!error && response.statusCode === 200) {
	    		 cb(null,JSON.parse(body));
	   		}
				else{
					cb(null, JSON.parse(error));
				}
  		});
};

Valor.prototype.getChampionById = function(id, region, cb){
		console.log('Valor..TO ME champion by ID: '.cyan, id.toString().green  );
		request('https://'+region+constants.champions+'/'+ id +'?api_key='+ this.api_key, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			cb(null,JSON.parse(body));
			}
		else{
			cb(null, JSON.parse(error));
		}
	});
};

Valor.prototype.getSummonerByName = function(name, cb){
	console.log('Valor..TO ME summoner by name: '.cyan, name.green  );
	request(constants.summoner + 'by-name/' + name + '?api_key=' + this.api_key, function (error, response, body) {
		if(!error && response.statusCode === 200) {
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
	console.log('Valor..TO ME summoner by ID: '.cyan, id.toString().green  );
	request(constants.summoner + id + '?api_key=' + this.api_key, function (error, response, body) {
		if (!error && response.statusCode === 200) {
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
	console.log('Valor..TO ME summoner masteries by ID: '.cyan, id.toString().green  );
	request(constants.summoner + id + '/masteries?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200) {
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

//I dont understand this one...
//why not just use getSummonerById and parse the results? I'll leave it as TODO if someone requests it.
//Til then please just parse getSummonerById for the name.
///api/lol/{region}/v1.4/summoner/{summonerIds}/name
// Valor.prototype.getSummonerNameById = function(arguments) {
// 	// body...
// }

// @TODO parse the body to get relevant info
Valor.prototype.getSummonerRunes = function(id, cb) {
	console.log('Valor..TO ME summoner runes by ID: '.cyan, id.toString().green  );
	request(constants.summoner + id + '/runes?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200) {
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};


Valor.prototype.getRankedStats = function(id, cb) {
	console.log('Valor..TO ME summoner ranked stats by ID: '.cyan, id.toString().green  );
	request(constants.stats + id + '/ranked?SEASON4&api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200) {
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerSummary = function(id, cb) {
	console.log('Valor..TO ME summoner summary by ID: '.cyan, id.toString().green  );
	request(constants.stats + id + '/summary?season=SEASON4&api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getRecentGame = function(id, cb) {
	console.log('Valor..TO ME recent game by ID: '.cyan, id.toString().green  );
	request(constants.game + id + '/recent?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerLeague = function(id, cb) {
	console.log('Valor..TO ME summoner league by ID: '.cyan, id.toString().green  );
	request(constants.league + id + '?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.getSummonerLeagueEntry = function(id, cb) {
	request(constants.league + id + '/entry?api_key=' + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.challengerRankings = function(cb) {
	console.log('Valor..TO ME challenger rankings'.cyan);
	request(constants.challenger + this.api_key, function(error, response, body){
		if(!error && response.statusCode === 200){
			cb(null, JSON.parse(body));
		}
		else{
			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

Valor.prototype.championData = function(cb) {
	request(constants.staticChampion + '?api_key=' + this.api_key, function(error, response, body){
		if (!error && response.statusCode === 200){
			cb(null, JSON.parse(body));
		}
		else{

			cb(null, 'Error code: ' +response.statusCode);
		}
	});
};

module.exports =  Valor;
