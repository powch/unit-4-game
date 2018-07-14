const characterBox = $('#characterBox');
const playerBox = $('#playerBox');
const enemyBox = $('#enemyBox');
const actionBox = $('#actionBox');
const logBox = $('#logBox');
const playerPortrait = $('#playerPortrait');
const enemyPortrait = $('#enemyPortrait');

let gameObj = {
    characters: {
        players: {
            playerAtk: 6,
            playerHp: 120,
            rey: {
                pic: 'assets/images/rey.jpeg'
            },
            r2d2: {
                pic: 'assets/images/r2d2.jpg'
            },
            luke: {
                pic: 'assets/images/luke.jpg'
            },
            chewy: {
                pic: 'assets/images/chewy.png'
            }
        },
        enemies: {
            roger: {
                hp: 30,
                counterAtk: 6,
                pic: 'assets/images/roger.png'
            },
            stormtrooper: {
                hp: 60,
                counterAtk: 10,
                pic: 'assets/images/stormtrooper.jpeg'
            },
            darthMaul: {
                hp: 90,
                counterAtk: 20,
                pic: 'assets/images/darthMaul.jpg'
            },
            darthVader: {
                hp: 120,
                counterAtk: 30,
                pic: 'assets/images/darthVader.jpg'
            },
            kylo: {
                hp: 200,
                counterAtk: 50,
                pic: 'assets/images/kylo.jpg'
            }
        }
    }
}