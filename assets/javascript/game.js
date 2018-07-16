var characterBox = $('#characterBox');
var playerBox = $('#playerBox');
var enemyBox = $('#enemyBox');
var actionBox = $('#actionBox');
var logBox = $('#logBox');
var playerPortrait = $('#playerPortrait');
var enemyPortrait = $('#enemyPortrait');
var characterHeader = $('#characterHeader');
var characterSelect = $('#characterSelect');

var gameObj = {
  playerAtk: 6,
  playerHp: 120,
  characters: {
    players: {
        rey: "assets/images/rey.jpeg",
        r2d2: "assets/images/r2d2.jpg",
        luke: "assets/images/luke.jpg",
        chewy: "assets/images/chewy.png"
    },
    enemies: {
      roger: {
        hp: 30,
        counterAtk: 6,
        pic: "assets/images/roger.png"
      },
      stormtrooper: {
        hp: 60,
        counterAtk: 10,
        pic: "assets/images/stormtrooper.jpeg"
      },
      darthMaul: {
        hp: 90,
        counterAtk: 20,
        pic: "assets/images/darthMaul.jpg"
      },
      darthVader: {
        hp: 120,
        counterAtk: 30,
        pic: "assets/images/darthVader.jpg"
      },
      kylo: {
        hp: 200,
        counterAtk: 50,
        pic: "assets/images/kylo.jpg"
      }
    }
  },
  playerSelect: function() {
    var port = this.characters.players;
    $.each(port, function(key, val) {
      var newImg = $('<img>');
      newImg.attr('src', val);
      $('#characterSelect').append(newImg);
    });
  },
  enemySelector: function() {
    var port = this.characters.enemies;
    $.each(port, function(key, val) {
      var newImg = $("<img>");
      newImg.attr("src", val.pic);
      $("#characterSelect").append(newImg);
    });
  }
};

