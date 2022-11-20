class User {
    constructor(_fN, _lN, _em, _pass, _age) {
        this.fN = _fN;
        this.lN = _lN;
        this.em = _em;
        this.pass = _pass;
        this.age = _age;
        this.verified = false;
        this.salary = 0;
    }
    sayHello(){
        alert(`hello  ${this.fN + " " + this.lN}`);
    }
    setSalary(x) {
        this.salary = x
        return this;
    }
    verifyUser() {
        this.verified = true
        return this;
    }
}

class Admin extends User{
    
    constructor(_fN, _lN, _em, _pass, _age, _role) {
        super(_fN, _lN, _em, _pass, _age);
        this.role = _role;
        this.godView = false;
    }
    doThis(){
        alert("i am manager");
    }
    activateGodView(){
        this.godView = true
        return this;
    }
}

class SuperAdmin extends Admin{
    constructor(_fN, _lN, _em, _pass, _age, _role, _key) {
    super(_fN, _lN, _em, _pass, _age, _role);
    this.key = _key;
    }
    closeShop() {
        alert("shope closed");
    }
}

var user1 = new User("dav", "ost", "do@gmail.com", "123", 26);
var user2 = new User("ari", "ost", "ao@gmail.com", "987654", 15);
var admin = new Admin("davi", "ostr", "dmo@gmail.com", "123456", 30, "Maneger");
var superad = new SuperAdmin("david", "ostrei", "dameos@gmail.com", "123456789", 26, "super manager", "gold");

console.log(admin.godView);
console.log(admin.salary);
console.log(admin.verified);
admin.setSalary(20000).verifyUser().activateGodView();

var lastName = prompt("whats your full name?") // David Ost
.split(" ") // [David, Ost]
.pop() // Ost
.toUpperCase() // OST

/*
user2.age = 18;
console.log(user2.age);
User.prototype.dateCreated = "12/2022";
console.log(superad.dateCreated);
user2.dateCreated = "12/2011";
console.log(user2.dateCreated);
delete user2.dateCreated;
console.log(user2.dateCreated);
*/