// HTML
var header = document.querySelector("header");
var btn = document.createElement("button");
btn.id = "start-game"
var h1 = document.createElement("h1")
header.appendChild(btn);
btn.appendChild(h1).textContent = "START GAME";

var main = document.querySelector("main");

var gameSection = document.createElement("section");
gameSection.id = "game-screen";

var blank = document.createElement("div");
blank.id = "blank-screen";

var catchMe = document.createElement("div");
catchMe.id = "catch-me";

main.appendChild(gameSection);
gameSection.appendChild(blank);
gameSection.appendChild(catchMe).textContent = "Click Me!";

var gameInfoSideBar = document.createElement("section");
gameInfoSideBar.id = "side-bar";
main.appendChild(gameInfoSideBar);

var info = document.createElement("div");
gameInfoSideBar.appendChild(info);

var score = document.createElement("div");
var sHead = document.createElement("h2");
sHead.innerHTML = "Score";
var sP = document.createElement("p");
sP.innerHTML = 0
info.appendChild(score);
score.appendChild(sHead);
score.appendChild(sP);

var points = document.createElement("div");
var pHead = document.createElement("h2");
pHead.innerHTML = "Points to next level";
var pP = document.createElement("p");
pP.innerHTML = 0
info.appendChild(points);
points.appendChild(pHead);
points.appendChild(pP);

var level = document.createElement("div");
var lHead = document.createElement("h2");
lHead.innerHTML = "Level";
var lP = document.createElement("p");
lP.innerHTML = 1;
info.appendChild(level);
level.appendChild(lHead);
level.appendChild(lP);

var missedClicks = document.createElement("div");
var mHead = document.createElement("h2");
mHead.innerHTML = "Missed Clicks";
var mP = document.createElement("p");
mP.innerHTML = 0
info.appendChild(missedClicks);
missedClicks.appendChild(mHead);
missedClicks.appendChild(mP);

var timer = document.createElement("div");
var tHead = document.createElement("h2");
tHead.innerHTML = "Timer";
var tP = document.createElement("p");
tP.innerHTML = 60
info.appendChild(timer);
timer.appendChild(tHead);
timer.appendChild(tP);

var hightScores = document.createElement("div");
var hHead = document.createElement("h2");
hHead.innerHTML = "Hight Scores";
var hP = document.createElement("p");
hP.innerHTML = 0
info.appendChild(hightScores);
hightScores.appendChild(hHead);
hightScores.appendChild(hP);


// JS
btn.addEventListener("click", startGame);
function startGame() {
    if (confirm("ready to start game?") == true) {
        btn.appendChild(h1).textContent = "CATCH ME IF YOU CAN!"
    };

    catchMe.className = "level1";


    /*$("#catch-me").mouseover(function () {
        setTimeout(() => {
          $(this).css("left", "" + Math.random() * 950 + "px");
          $(this).css("top", "" + Math.random() * 550 + "px");
        }, 300 - SPEEDESCAPEANDROTATION);
      })

    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000)*/

};







btn.addEventListener("click", function () {
    catchMe.className = "level1";

    $("#catchMe").mouseover(function () {
        setTimeout(() => {
            $(this).css("left", "" + Math.random() * 1000 + "px");
            $(this).css("top", "" + Math.random() * 550 + "px");
        }, 20000 - SPEEDESCAPEANDROTATION);

    });
})
/*catchMe.addEventListener("click", run);
function run () {
 var posLeft = 100;
    if (catchMe.style.left) {
        catchMe.style.left = posLeft + "500px";
    } else {var posLeft = parseInt(catchMe.style.left);
        if (posLeft >= 800) {
            catchMe.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            catchMe.style.left = (posLeft + 150) + "px";
        }
    }
};*/


//gameSection.appendChild(catchMe);
//catchMe.appendChild(gameSection).textContent = "Click Me!";
//var footer = document.querySelector("footer");