var salary = prompt("enter salary")
var irs = 0;

switch (true) {
    case salary <= 25000:
        irs = salary * 0.1;
        break;
    case salary > 25000 && salary <= 50000:
        irs = 25000 * 0.1 + (salary - 25000) * 0.2;
        break;
    case salary >50000 && salary <= 100000:
        irs = 25000 * 0.1 + 25000 * 0.2 + (salary - 50000) * 0.3;
        break;
    case salary >100000 && salary <= 150000:
        irs = 25000 * 0.1 + 25000 * 0.2 + 50000 * 0.3 + (salary - 100000) * 0.4;
        break;
    case salary > 150000:
        irs = 25000 * 0.1 + 25000 * 0.2 + 50000 * 0.3 + 100000 * 0.4 + (salary - 150000) * 0.5;
        break;
    
}
alert("you have to pay " + irs + " tex")
console.log(irs)
console.log(salary)






