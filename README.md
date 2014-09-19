Valor
=====
[![Build Status](https://travis-ci.org/ashishdatta/Valor.svg?branch=master)](https://travis-ci.org/ashishdatta/Valor)

[![NPM Download](https://nodei.co/npm/valor.png?downloads=true)](https://www.npmjs.org/package/valor)

League of Legends API Wrapper for Node.js

Grab an API key from http://developer.riotgames.com
### Installation
```
npm install valor
```
### Usage
```
var valor = require('valor');
var valortest = new valor(your_api_key);

valortest.getSummonerById('194532568', function (err, res){
  console.log(res);
});
valortest.getSummonerMasteries('19453268', function(err,res){
   console.log(res);
});

valortest.getSummonerRunes('19453268', function(err,res){
   console.log(res);
});

```


### Methods
- Valor.getChampions(id, callback);
- Valor.getSummonerByName(name, callback);
- Valor.getSummonerById(id, callback);
- Valor.getSummonerMasteries(id, callback);
- Valor.getSummonerRunes(id, callback);
- Valor.getRankedStats(id, callback);
- Valor.getSummonerSummary(id, callback);
- Valor.getRecentGame(id, callback);
- Valor.getSummonerLeague(id, callback);
- Valor.getSummonerLeagueEntry(id, callback);
- Valor.challengerRankings(callback);
- Valor.championData(callback);

