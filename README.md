Valor
=====

[![NPM Download](https://nodei.co/npm/valor.png?downloads=true)](https://www.npmjs.org/package/valor)

League of Legends API Wrapper for Node.js

Grab an API key from http://developer.riotgames.com
### Installation
```
git clone https://www.github.com/ashishdatta/Valor
```
### Usage
```
var valor = require('./lib/Valor');
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

