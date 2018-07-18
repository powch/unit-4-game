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
  playerVal: '',
  enemyVal: '',
  playerHP: 0,
  runningHP: 1,
  enemyHP: 0,
  runningEHP: 1,
  atk: 0,
  runningAtk: 0,
  counterAtk: 0,
  wins: 0,
  characters: {
    rey: {
      hp: 110,
      atk: 8,
      counterAtk: 28,
      pic: "assets/images/rey.jpeg"
    },
    rogerRoger: {
      hp: 165,
      atk: 5,
      counterAtk: 8,
      pic: "assets/images/roger.png"
    },
    luke: {
      hp: 140,
      atk: 7,
      counterAtk: 14,
      pic: "assets/images/luke.jpg"
    },
    chewy: {
      hp: 165,
      atk: 5,
      counterAtk: 8,
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
      this.runningHP = this.characters.rey.hp;
      this.atk = this.characters.rey.atk;
      this.runningAtk = this.characters.rey.atk;
    } else if (val === 'rogerRoger') {
      $('#playerPortrait').attr('src', this.characters.rogerRoger.pic);
      this.playerHP = this.characters.rogerRoger.hp;
      this.runningHP = this.characters.rogerRoger.hp;
      this.atk = this.characters.rogerRoger.atk;
      this.runningAtk = this.characters.rogerRoger.atk;
    } else if (val === 'luke') {
      $('#playerPortrait').attr('src', this.characters.luke.pic);
      this.playerHP = this.characters.luke.hp;
      this.runningHP = this.characters.luke.hp;
      this.atk = this.characters.luke.atk;
      this.runningAtk = this.characters.luke.atk;
    } else if (val === 'chewy') {
      $('#playerPortrait').attr('src', this.characters.chewy.pic);
      this.playerHP = this.characters.chewy.hp;
      this.runningHP = this.characters.chewy.hp;
      this.atk = this.characters.chewy.atk;
      this.runningAtk = this.characters.chewy.atk;
    }
    this.playerVal = val;
  },
  enemySelect: function(val) {
    if (val === 'rey') {
      $('#enemyPortrait').attr('src', this.characters.rey.pic);
      this.enemyHP = this.characters.rey.hp;
      this.runningEHP = this.characters.rey.hp;
      this.counterAtk = this.characters.rey.counterAtk;
    } else if (val === 'rogerRoger') {
      $('#enemyPortrait').attr('src', this.characters.rogerRoger.pic);
      this.enemyHP = this.characters.rogerRoger.hp;
      this.runningEHP = this.characters.rogerRoger.hp;
      this.counterAtk = this.characters.rogerRoger.counterAtk;
    } else if (val === 'luke') {
      $('#enemyPortrait').attr('src', this.characters.luke.pic);
      this.enemyHP = this.characters.luke.hp;
      this.runningEHP = this.characters.luke.hp;
      this.counterAtk = this.characters.luke.counterAtk;
    } else if (val === 'chewy') {
      $('#enemyPortrait').attr('src', this.characters.chewy.pic);
      this.enemyHP = this.characters.chewy.hp;
      this.runningEHP = this.characters.chewy.hp;
      this.counterAtk = this.characters.chewy.counterAtk;
    }
    this.enemyVal = val;
  },
  updateHPBar: function() {
    var HP = this.playerHP;
    var eHP = this.enemyHP;
    var runHP = this.runningHP;
    var runEHP = this.runningEHP;
    var playerPer = Math.floor(((runHP / HP) * 100));
    var enemyPer = Math.floor(((runEHP / eHP) * 100));

    $('#playerBar').attr('style', 'width: ' + playerPer + '%');
    $('#playerBar').text(this.runningHP);
    $('#enemyBar').attr('style', 'width: ' + enemyPer + '%');
    $('#enemyBar').text(this.runningEHP);
  }
};

gameObj.playerGen();

$('.charDiv').on('click', function() {
  var val = $(this).attr('value');
  if (gameObj.enemyChosen === true) {
    return;
  } else if (gameObj.playerChosen === false) {
    $('#characterHeader').text('Choose an enemy!');
    gameObj.playerSelect(val);
    $(this).hide();
    gameObj.playerChosen = true;
  } else if (gameObj.playerChosen === true) {
    gameObj.enemySelect(val);
    $(this).hide();
    gameObj.enemyChosen = true;
    gameObj.updateHPBar();
  }
});

$('#atkBtn').on('click', function() {
  if (gameObj.enemyChosen === true) {
    $('#playerLog').text('You attack the enemy for ' + gameObj.runningAtk + ' damage. ');
    $('#enemyLog').text('The enemy counter attacks you for ' + gameObj.counterAtk + ' damage.');
    gameObj.runningEHP = gameObj.runningEHP - gameObj.runningAtk;
    gameObj.runningHP = gameObj.runningHP - gameObj.counterAtk;
    gameObj.runningAtk = gameObj.runningAtk + gameObj.atk;
    gameObj.updateHPBar();
    $('#playerLog').append('(Next attack: ' + gameObj.runningAtk + ')');
  }
  if (gameObj.runningEHP <= 0) {
    $('#enemyLog').empty();
    $('#playerLog').text("You've defeated " + gameObj.enemyVal + "!");
    $('#enemyPortrait').attr('src', 'assets/images/empire.png');
    $('#enemyBar').attr('style', 'width: 100%');
    $('#enemyBar').text('');
    gameObj.enemyChosen = false;
    gameObj.wins++;
    gameObj.runningEHP = 1;
    console.log(gameObj.wins);
    if (gameObj.wins === 3) {
      var win = confirm('YOU WIN\nPress OK to restart');
      if (win === true) {
        location.reload();
      } else {
        var welp = setInterval(() => {
          $('#characterHeader').text('Please refresh the page.\nThis is awkward.');
          clearInterval(welp);
        }, 5000);
      }
    }
  }
  if (gameObj.runningHP <= 0) {
    var lose = confirm('YOU LOSE.\nPress OK to try again');
    if (lose === true) {
      location.reload();
    } else {
      var welp = setInterval(() => {
        $('#characterHeader').text('Please refresh the page.\nThis is awkward.');
        clearInterval(welp);
      }, 5000);
    }
  } 
});

