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
  playerChosen: false,
  enemyChosen: false,
  playerHP: 0,
  enemyHP: 0,
  atk: 0,
  counterAtk: 0,
  characters: {
    rey: {
      hp: 120,
      atk: 6,
      counterAtk: 12,
      pic: "assets/images/rey.jpeg"
    },
    artoo: {
      hp: 200,
      atk: 20,
      counterAtk: 100,
      pic: "assets/images/r2d2.jpg"
    },
    luke: {
      hp: 150,
      atk: 8,
      counterAtk: 15,
      pic: "assets/images/luke.jpg"
    },
    chewy: {
      hp: 175,
      atk: 7,
      counterAtk: 10,
      pic: "assets/images/chewy.png"
    }
  },
  playerGen: function() {
    var charObj = this.characters;
    $.each(charObj, function(key, val) {
      var newDiv = $('<div>');
      var newImg = $('<img>');
      var banner = $('<p>');
      var hp = $('<p>');
      newImg.attr('src', val.pic);
      newDiv.attr('value', key);
      newDiv.addClass('charDiv');
      newImg.addClass('playerPic');
      banner.addClass('picBanner');
      banner.text(key);
      hp.text(val.hp);
      hp.addClass('playerHP');
      newDiv.append(newImg);
      newDiv.append(banner);
      newDiv.append(hp);
      $('#characterSelect').append(newDiv);
    });
  },
  playerSelect: function(val) {
    if (val === 'rey') {
      $('#playerPortrait').attr('src', this.characters.rey.pic);
      this.playerHP = this.characters.rey.hp;
      this.atk = this.characters.rey.atk;
    } else if (val === 'artoo') {
      $('#playerPortrait').attr('src', this.characters.artoo.pic);
      this.playerHP = this.characters.artoo.hp;
      this.atk = this.characters.artoo.atk;
    } else if (val === 'luke') {
      $('#playerPortrait').attr('src', this.characters.luke.pic);
      this.playerHP = this.characters.luke.hp;
      this.atk = this.characters.luke.atk;
    } else if (val === 'chewy') {
      $('#playerPortrait').attr('src', this.characters.chewy.pic);
      this.playerHP = this.characters.chewy.hp;
      this.atk = this.characters.chewy.atk;
    }
  },
  enemySelect: function(val) {
    if (val === 'rey') {
      $('#enemyPortrait').attr('src', this.characters.rey.pic);
      this.enemyHP = this.characters.rey.hp;
      this.counterAtk = this.characters.rey.counterAtk;
    } else if (val === 'artoo') {
      $('#enemyPortrait').attr('src', this.characters.artoo.pic);
      this.enemyHP = this.characters.artoo.hp;
      this.counterAtk = this.characters.artoo.counterAtk;
    } else if (val === 'luke') {
      $('#enemyPortrait').attr('src', this.characters.luke.pic);
      this.enemyHP = this.characters.luke.hp;
      this.counterAtk = this.characters.luke.counterAtk;
    } else if (val === 'chewy') {
      $('#enemyPortrait').attr('src', this.characters.chewy.pic);
      this.enemyHP = this.characters.chewy.hp;
      this.counterAtk = this.characters.chewy.counterAtk;
    }
  },
  atkSequence: function() {
    var atk = this.atk;
    var cAtk = this.counterAtk;
    var HP = this.playerHP;
    var eHP = this.enemyHP;
  }
};

gameObj.playerGen();

$('.charDiv').on('click', function() {
  var val = $(this).attr('value');
  if (gameObj.playerChosen === false) {
    gameObj.playerSelect(val);
    $(this).hide();
    gameObj.playerChosen = true;
  } else if (gameObj.playerChosen === true) {
    gameObj.enemySelect(val);
    $(this).hide();
    gameObj.enemyChosen = true;
  }
});

// $('.atkBtn').on('click', function() {
//   if (gameObj.enemyChosen = true) {
//     var 
//   }
// });

