var CodeProject = {
    code: "",
    tries: 1,
    codeEntered: "",
};

var codesJSON = localStorage.codes;
if (codesJSON) {
    try {
        let codes = JSON.parse(codesJSON)
        CodeProject.code = codes
    } catch (e) {
        console.log(e)
        updateLS()
    }
} else {
    updateLS()
}
function updateLS() {
    localStorage.codes = JSON.stringify(CodeProject.code)
}



var main = document.querySelector("main");
var input = document.createElement("input");
input.type = "number";
input.maxLength = "4";
input.required = "required";

var btn = document.createElement("button");
btn.innerHTML = "Submit"
main.append(input, btn);

btn.addEventListener("click", newPass);
function newPass() {
    CodeProject.code = input.value
};

btn.addEventListener("click", toggleKeypad);
function toggleKeypad() {
    var x = keypadSection;
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
};

var main = document.querySelector("main");
var keypadSection = document.createElement("section");
keypadSection.className = "keypad-section"
var keypad = document.createElement("div");
keypad.className = "keypad";
for (let i = 0; i < 10; i++) {
    var btn = document.createElement("div");
    btn.className = "key";
    var btnSpan = document.createElement("span");
    var val = i == 9 ? "0" : (i + 1).toString();
    btnSpan.innerText = val;
    btn.append(btnSpan);
    keypad.append(btn);
    setClicksBTNS(btn, val);
}
keypadSection.append(keypad);
main.append(keypadSection);


function setClicksBTNS(btn, val) {
    btn.addEventListener("click", function () {
        CodeProject.codeEntered += val;
        checkValue();
    });
}

function checkValue() {
    if (CodeProject.codeEntered.length == 4) {
        if (CodeProject.codeEntered === CodeProject.code) {
            success();
        } else if (CodeProject.tries < 3) {
            CodeProject.tries++;
            reset();
        } else {
            callPolice();
        }
    }
}

function success() {
    alert("Success");

}

function reset() {
    alert("Wrong Code")
    CodeProject.codeEntered = "";
}

function callPolice() {
    alert("Calling police");
};
