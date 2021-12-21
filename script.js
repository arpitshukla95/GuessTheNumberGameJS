'use strict';
let val = Math.floor((Math.random() * 20) + 1)
let highScore = 0;
console.log(val);

document.querySelector('.check').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    if (Number(document.querySelector('.guess').value) !== Number(val)) {

        if (Number(document.querySelector('.score').textContent) > 0) {

            if (val > Number(document.querySelector('.guess').value)) {
                document.querySelector('.message').textContent = 'Number is too low';
            }
            else {
                document.querySelector('.message').textContent = 'Number is too high';
            }
            document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) - 1;
        }
        else
            document.querySelector('.message').textContent = '🥴 You lost!'
    }
    else if (!Number(document.querySelector('.guess').value)) {
        document.querySelector('.message').textContent = '⛔ No number';

    }
    else if (Number(document.querySelector('.guess').value) === Number(val)) {
        document.querySelector('.message').textContent = '🎉 Correct answer'

        document.querySelector('.number').textContent = val;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (Number(document.querySelector('.score').textContent) > highScore) {
            highScore = Number(document.querySelector('.score').textContent);
            document.querySelector('.highscore').textContent = highScore;
        }
    }

})

document.querySelector('.again').addEventListener('click', function () {
    val = Math.floor((Math.random() * 20) + 1);
    console.log(val);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.message').textContent = 'Start guessing...';

})