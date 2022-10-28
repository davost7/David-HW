var stud = prompt("enter name")
var tz = 0;

try{


//david
//mose
//aron
//meir

    switch(stud) {
        case "david":
            tz=1236;
            throw new Error ("david not here")
            getMECoffer();
            break;

        case "meir":
            tz=4567;
            getMEtea();
        default:
            tz = "invalid student"
            getMEtea();
    }

    console.log(tz);
} catch(err){
    alert(err)
}

