var firstName = prompt("Please enter your first name");
var lastName = prompt("please enter your last name");
var id = prompt("Please enter your ID");

const user ={
    fullName: {firstName: firstName, lastName: lastName},
    ID: id,
}

console.log(user)
alert(user)

confirm("Do you want to add new user")


/*function user(name, ID) {
    this.name = name;
    this.ID = ID;
}
user.prototype.user1 = function () {
    return this.firstName + " " + this.lastName
}
var newUser = new user(firstName + " " + lastName, id);
console.log(newUser)
alert(newUser)

const user1 = [user, "david"];

user1.length == 2;
qtyuser1 = user1.length



function demoB () {
    if (confirm == true) {newUser = user}
  }
  console.log(demoB)*/