var timer = 3;
var score = 0;
var hitrn = 0;

function incScore() {
    score += 10;
    document.querySelector('#score-val').textContent = score
}

function getNewHit() {
     hitrn = Math.floor(Math.random() * 10)
    document.querySelector('#hit-val').textContent = hitrn
}

function makeBubble() {

    var clutter = "";

    for (var i = 1; i < 177; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('.nav-bottom').innerHTML = clutter
}

function runTimer() {
    var clearTimer = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer-val').textContent = timer;
        }
        else {
            clearInterval(clearTimer)
            document.querySelector('.nav-bottom').innerHTML = `<h1>Game over</h1>`;
        }
    }, 1000);
}

document.querySelector(".nav-bottom")
    .addEventListener('click', function (dets) {
        // alert("click")
        var clicked = Number(dets.target.textContent)
        if (clicked === hitrn) {
            incScore();
            makeBubble();
            getNewHit();
        }
    })

getNewHit();
runTimer();
makeBubble();