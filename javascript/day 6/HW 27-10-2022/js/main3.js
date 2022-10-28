const arrUser = [{fName: "David", uName: "david", uPasswrd: "123456789"}/*, 
    {fName: "Meir", uName: "@meir", uPasswrd: 123456789}, 
{fName: "Aron", uName: "@aron", uPasswrd: 123456789}*/];

    var username = document.getElementById("username");
    var passw = document.getElementById ("passw");
    var submit = document.getElementById ("sub");

    /*submit.addEventListener("click", function() 
    {
        if (arrUser.includes(username.value) && arrUser.uPasswrd.includes(passw.value))
            alert("welcome");
        else
            alert("wrong");

    });*/
    submit.addEventListener("click", function (uName) {
        username === uName ? alert("welcom") : alert("wrong")
    });