// Scope and closure ,HOF
// Global -->Accesible to everyone.
// Functional -->Accessible only to that function.
// Block level Scope -->Accessible only to that block.

let a = 10;
const b = 20;


function gretting(){
    let c = 30;


}
gretting();
console.log(c); // Functional Scope


if (true){
    let d = 30;
     console.log(d);
     var e = 90;
}
 console.log(d);
console.log(e);


let global = 30;

function greet() {
    // let global = 40;

    function meet(){
        console.log(global);
    }
    meet();

}
greet();



function createCouter(){
  let count = 0;
    function increment(){

        count ++;
        return count;
    }
    return increment;
}
const counter = createCouter();
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Banking System

function createBankAccount() {
    let balance = 500;

    const user = {
        deposit: function (amount) {
            if (typeof amount === "number" && amount > 0) {
                balance += amount;
                return balance;
            }
        },

        withdraw: function (amount) {
            if (typeof amount === "number" && amount > 0 && balance >= amount) {
                balance -= amount;
                return balance;
            }
            return "Insufficient Balance";
        },

        getBalance: function () {
            return balance;
        }
    };

    return user;
}

const customer = createBankAccount();

console.log(customer.withdraw(1000));
console.log(customer.getBalance());  



// Higher order function -->

function double(value){
    return function execute (num){
      return num * value;
    }
}
const n = double(20);
console.log(n(5));