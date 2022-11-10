//final (divide, multiply)

/*(function (b, c) {
    alert(
        b(
            prompt("Enter first number to multiply"),
            prompt("Enter first second to devide")
        ) +
        c(
            prompt("Enter first number to multiply"),
            prompt("Enter first number to multiply")
        )
    );
})(
    function (a, b) {
        return a / b;
    },
    function (a, b) {
        return a * b;
    }
);*/



var main = document.querySelector("main");

var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var div = document.createElement("div");
btn1.innerHTML = "start";
btn2.innerHTML = "stop";

div.append(btn1, btn2);
main.append(div);
//var clock = document.createElement("div")

var section = document.createElement("section")
main.append(section)
var st = null

btn1.addEventListener("click", function(){
 st = setInterval(function(){
    var block = document.createElement("div");
    block.style.backgroundColor = "red";
    section.append(block);
 }, 1000)
})

btn2.addEventListener("click", function() {
clearInterval(st)
} );
console.log()




//var d = new Date():