const arrUser = [{fName: "David", uName: "david", uPasswrd: "123456789"}, 
    {fName: "Meir", uName: "@meir", uPasswrd: 123456789}, 
{fName: "Aron", uName: "@aron", uPasswrd: 123456789}];

    var username = document.getElementById("username");
    var passw = document.getElementById ("passw");
    var submit = document.getElementById ("sub");

    submit.addEventListener("click", function validate(username, passw) 
    {
        for (var i= 0; i < arrUser.length; i++) {
            if ((username == arrUser[i].uName) && (passw == arrUser[i].uPasswrd)) {
                alert("welcome");
            }
        }
    });