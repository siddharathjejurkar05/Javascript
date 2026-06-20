// Objects--->

const user = {
    name: "Rohit" ,
    age: 20 ,
    emailId: "javascript@gmail.com" ,
    amount : 3400 ,
   HomeAddress : "Nagar"
}
console.log(user);

console.log(user.name);
console.log(user.emailId);
console.log(user.amount);

// Update
user.addhar = 230455042341;//Insert Value 
user.amount = 10000;//Update Value
console.log(user);

// Delete -->
delete user.addhar;


const user = {
    name: "Rohit" ,
    age: 20 ,
    emailId: "javascript@gmail.com" ,
    amount : 3400 ,
}

const user2 = user;
user2.age = 90;
console.log(user);

// Important ---⬇️
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(let keys in user){
    console.log(keys, user[keys]);
}

const user = {
    name: "Rohit" ,
    age: 20 ,
    emailId: "javascript@gmail.com" ,
    amount : 3400 ,
}

const name = user.name ; 
const age = user.age ;
const email = user.emailId;
const totalbal  = user.amount;

// Object Destructing
const {name,age,amount } = user;
const {name:UserName,age:UserAge,amount:UserAmount } = user;
console.log(UserName,UserAge,UserAmount);

const arr = [10,20,40,90,11];

const [first , second] = arr;
console.log(first, second);

const user = {
    name: "Rohit" ,
    age: 20 ,
    emailId: "javascript@gmail.com" ,
    amount : 3400 ,
}


const values = Object.keys(user);
console.log(values)
for (let keys of values){
    console.log(keys);
}

for (let value of Object.values(user)){
    console.log(value);
}

console.log(Object.entries(user));
 
for (let all of Object.entries(user)){
    console.log(all);
}

for (let [keys,values] of Object.entries(user)){
    console.log(keys,values);
}

const user = {
    name: "Rohit" ,
    age: 20 ,
    emailId: "javascript@gmail.com" ,
    amount : 3400 ,
    greeting : function(){
        console.log(`I am Coming ${this.name}`);
        return 20;
    
}
}
const vall = user.greeting();
console.log(vall); 

// This keyword Example:
const user2 = {
    name: "Mohit" ,
    age: 20 ,
    emailId: "javascript@gmail.com" ,
    amount : 3400 ,
    greeting : function(){
        console.log(`I am Coming ${this.name}`);
        return 20;
    
}
}
user2.greeting();

const user = {
    name : "Rohit",
    age : 20,
    emailId : "javascript@gmail.com",
    amount : 3400,
    address : {
        city : "Loni" , 
        state : "Maharastra"
    }

}

// Shallow Copy
const user2 = {...user};
user2.name = "Mohit";
user2.age = 100;
user2.address.city = "Shrirampur";
console.log(user);
console.log(user2);
console.log(user.address.city);


// Deep Copy

const user2 = structuredClone(user);
user2.address.city = "Shrirampur";
console.log(user);
console.log(user2);

// Key = String || Symbol;

const sym = Symbol("id")
const user = {
    name:"Rohit",
    age:20,
    0:100,
    2:"Mohan",
    [sym]: "Heelo jii"
}

console.log(user[sym]);
