var main = document.querySelector("main");
var btn = document.createElement("button");
btn.innerText = "Roll dice!"
main.appendChild(btn);


btn.addEventListener("click", function rollDice() {
    return Math.floor(math.random() * 6) + 1;
});


/*function rollDices () {
    return rollDice() + ", " + rollDice();
}*/