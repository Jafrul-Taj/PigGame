var score, activePlayer, roundScore, Dice, gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click',
    function() {
        if (gamePlaying) {
            var Dice = Math.floor(Math.random() * 6) + 1;
            var domDice = document.querySelector('.dice')
            domDice.style.display = 'block';
            domDice.src = 'dice-' + Dice + '.png';


            if (Dice > 1) {
                roundScore += Dice;
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }

    });

document.querySelector('.btn-hold').addEventListener('click',
    function() {
        if (gamePlaying) {
            //update rScore
            score[activePlayer] += roundScore;

            //showing to the dome
            document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

            if (score[activePlayer] >= 50) {
                document.getElementById('name-' + activePlayer).textContent = 'Winner';

                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.dice').style.display = 'none';
                // document.querySelector('.btn-roll').style.display = 'none';

                //init();
                gamePlaying = false;

            } else {
                nextPlayer();
            }
        }


    });

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('#name-0').textContent = 'Player 1';

    document.querySelector('.btn-roll').style.display = 'block';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}