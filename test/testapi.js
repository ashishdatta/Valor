describe('Valor to me!', function(){
  'use strict';

  var valor = require('../lib/valor');
  var should = require('should');
  var valortest = new valor(your_api_key);
  var sampleId = '19453268';


  it('should be able to retrieve all champions', function(done){
      valortest.getChampions('na',function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });

  it('should be able to retrieve champions by ID', function(done){
    valortest.getChampionById(1,'na', function(err, res){
      should.not.exist(err);
      should.exist(res);
      done();
    });
  });

  it('should be able to retrieve summoner info by name', function(done){
    valortest.getSummonerByName('Habbgun14', function(err, res){
      should.not.exist(err);
      should.exist(res);
      done();
    });
  });

  it('should be able to retrieve summoner info by ID', function(done){
    valortest.getSummonerById(sampleId, function(err, res){
      should.not.exist(err);
      should.exist(res);
      done();
    });
  });

  it('should be able to retreieve summoner masteries by ID', function(done){
    valortest.getSummonerMasteries(sampleId, function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve summoner runes by ID', function(done){
    valortest.getSummonerRunes(sampleId, function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve summoner ranked stats by ID', function(done){
    valortest.getRankedStats(sampleId, function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve summoner summary by ID', function(done){
    valortest.getSummonerSummary(sampleId, function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve summoner most recent game by ID', function(done){
    valortest.getRecentGame(sampleId, function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve summoner league by ID', function(done){
    valortest.getSummonerLeague(sampleId, function(err, res){
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve summoner league entry by ID', function(done){
    valortest.getSummonerLeagueEntry(sampleId, function(err, res){
        console.log(res);
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve challenger rankings', function(done){
    valortest.getSummonerLeagueEntry(sampleId, function(err, res){
        console.log(res);
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });

  it('should be able to retreieve champion data by ID', function(done){
    valortest.championData(sampleId, function(err, res){
        console.log(res);
        should.not.exist(err);
        should.exist(res);
        done();
    });
  });




});
