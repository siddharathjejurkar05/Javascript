Day-1 ----->


let name = "Siddhu";
let age = 21;
age = 30;
console.log(name,age);


const account = 123456;
console.log(account);
let a = 10;
let b = 2.34
let c = "Siddhu";
let e = false;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof e);

Number
var a = 10;
a = 20;
console.log(a)

String
let c = "Srike is coming";
let d = 'Dadu';
console.log(c,d)

Boolean
let login = true;
let f = false;
console.log(login,f)

Undefine
let user ;
console.log(typeof user)

bigInt
let num = 1232323123123n;
console.log(typeof num)

null 
let weather = null
console.log (typeof weather)
 
Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id2==id1);

Array
let arr = [10,20,11,"Rohit",true];
console.log(arr);

Object
Rohit ,12312 , 18 , gen
let obj = {
    name:"Rohit",
    account:12312,
    Age:18,
    category:'gen'
}
console.log(obj)

Function

function add(){
    console.log("JavaScript Function")
}
add();

let s = function add(){
    console.log("JavaScript Function")
}
// console.log(s);
s();

let str = "Rohit"
str[0] = "M"
console.log(str)



Non-primitive data types are mutable
let arr = [10,20,30,40]

arr.push(90);
arr[0] = 70;

console.log(arr)

let obj = {
    name:"Siddhu",
    age:21
}
obj.name = "Rohit";
console.log(obj.name)

let a = 20;
let b = a;
b = 30;
console.log(a,b);


let obj = {
    name:"Saurabh",
    age:23
}

let obj2 = obj
let obj3 = obj2
obj2.name = "Vishal";  
obj3.name = "Vivek"       

console.log(obj);


Arithmetic Operators
console.log("Arithmetic Operators:");
console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(6/5);
console.log(5%2);

console.log("\n");
console.log(5**3);

Assignment Operator

let x = 20;
let y = 10;
//  x = x + y;
// x = x - y ; 
// x = x * y ; 
// x += y;
x %= y;
 console.log(x);

Comparison Operator--->

let x = 20;
let y = 10;
 
 console.log(x<y);
 console.log(x>y);
 console.log(x<=y);
 console.log(x>=y);
 console.log(x==y);
 console.log(x===y);

String to NUmber convert ----->
let z = "10";
let a = Number(z);
console.log(typeof a);

let x = 20;
let y = "20";

console.log(x==y);
console.log(x===y);


let a = "121ac";
let b = Number(a);

console.log(b);
console.log(typeof b);

Number to String---->

let a  = 10;
let b = String(a);

console.log(typeof b);

Boolean To Number-->

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));


console.log(String(false));

console.log(typeof Boolean("Hello Worlds"));

Computer Science Challenge--->

let a = 0.1;
let b = 0.2;

let c  = a+b;

console.log(c==0.3);
console.log(c);


console.log(null==undefined);
console.log(null===undefined);

console.log(null>=0);

console.log("Abhay" < "Siddharth");
console.log("abhay" > "Siddharth");

console.log(10<=true);

