/*
var passw = {};
var main = document.querySelector("div")
var password = document.getElementById("pass")
var btn = document.getElementById("btn")
btn.addEventListener("click",password.match )

for (let i = 0; i < 4; i++)
if (pa)
(password.match(/^[a-z]{3,15}$/)) break;
if(i == 4) throw new Error("Too many tries");*/

/*var person = {};
try {
for (let i = 0; i < 5; i++) {
person.fName = prompt("What's your first name?");
if (person.fName.match(/^[a-z]{3,15}$/)) { //RegEx…soon
break;
}
if (i == 4) {
throw new Error("Too many tries");
}
}
person.age = parseInt(prompt("How old are you?"));
var t = "You're too young";
if (isNaN(person.age) || person.age < 18) {
throw new Error(t);
} else {
alert("success");
}
} catch (e) {
alert(e);
};


var main = document.querySelector("main");

var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var div = document.createElement("div");
btn1.innerHTML = "start";
btn2.innerHTML = "stop";

//div.append(btn1, btn2);
//main.append(div);
//var clock = document.createElement("div")

var section = document.createElement("section")
main.append(section)
var st = null

.addEventListener("click", function(){
 st = setInterval(function(){
    var block = document.createElement("div");
    block.style.backgroundColor = "red";
    section.append(block);
 }, 1000)
})

btn2.addEventListener("click", function() {
clearInterval(st)
} );
console.log()*/

/*var i = 1
var st = setInterval(function(){
    console.log(i)
    i++
}, 1000)

setInterval(myTimer, 1000);
var d = new Date;
d.setHours(0, 0, 0);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.d();
};*/

var s=00;
var m=00;
var h=00;

var main = document.querySelector("main");

var startbtn = document.createElement("button",)
startbtn.onclick = function(){"startStop()"};
var stopbtn = document.createElement("button",);
stopbtn.onclick = function(){ "stop()"};
var resetbtn = document.createElement("button");
var div = document.createElement("div");

startbtn.innerHTML = "Start";
stopbtn.innerHTML = "Stop";
resetbtn.innerHTML = "Reset";
div.append(startbtn, stopbtn, resetbtn);
main.append(div);
var st = null

startbtn.addEventListener('click', function() {
	let i = 0;
  let date = new Date(1);
  console.log(date.getHours() + " " + date.getMinutes() + " " + date.getSeconds());

	st = setInterval(function() {

	}, 1000);
});

// Stopping the timer:
stopbtn.addEventListener('click', function() {
	clearInterval(st);
});


/*var clock = document.createElement("div")
div.append(clock)
var st = null
startbtn.addEventListener("click", function(){
    st = setInterval(function(){})
});
console.log(st)*/