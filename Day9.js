// Function ---->

// function greeting()
// {
//     console.log("Hello Coder");
// }
// greeting();

// Add two number --->
// function addNumber(num1,num2,num3=0,num4=0){
//     const num = num1 + num2 + num3 + num4;
//     console.log(num);
// }
// addNumber(3,3);
// addNumber(9,9,6);

// Using Rest Operator ---->

// function addNumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// addNumber(3,3,3,3,3,3,3,3,3,3);
// addNumber(9,9,6);


// function multiply(...num1){
//     let mul = 1;
//     for(let num of num1){
//         mul*=num;
//     }
//     console.log(mul);
// }
// multiply(1,2,3,4,5,6,7);


// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10];
// const [first,second,...num] = arr;
// console.log(first,second,num);

// const ans = [...arr,...arr2];
// console.log(ans);

// Declaration VS Expression ---->

// const addNumber = function(num1,num2){
//     return num1 + num2;
// }
// console.log(addNumber(3,3));


// addNum(2,2);
// function addNum(num1,num2){
//      const num = num1 + num2;
//      console.log(num);
// }



// Arrow Function --->

// const addNumber = (num1,num2)=>{
//    return num1 + num2;
// }
// console.log(addNumber(2,2));


// const mul = (num3,num4)=> num3 * num4;
// console.log(mul(3,2));

// let arr = [8,3,4,100,30,10];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// if we have single parameter, no need of this()-->
// const sqaureNumber = (num)=>num*num;
// console.log(sqaureNumber(6));

// Arrow return object --->

// const greeting = ()=>{
//     let user = {
//         name:"Rohit",
//         age:20
//     }
//     return user;
// }
// console.log(greeting());

// const greeting = ()=>({name:"Mohit",age:21});
// console.log(greeting());


// IIFE =>Immediately invoked function 

// (function greeting(){
//     console.log("Hello Coder");
// })();

// (()=>{
//     console.log("Arrow Function==>")
// })();

// Callbacks-----> A callback function in javascript is a function passes 
//                 as an argument to another function.

// function greet(){
//     console.log("Hello Coder, kaise ho");
// }
// function dance(){
//      console.log("I am dancing....")
// }
// function meet(callback){
//     console.log("I am Going to meet someone...!");
//     // dance(); Hardcode(Reusable)
//     // greet();
//     callback();
//      console.log("I have finished metting....")
// }
// meet(greet);
// meet(dance);

// real world example of Callback--->(Zomato App)
function blinkitOrderPlaced(){
    console.log("We have started packing...");
}
function placeOrder(){
    console.log("We have started preparing your food...");
}

function payment(amount,callback){
    console.log(`${amount}rs payment has initialized`);
    console.log("Payment received..")
    callback();


    // GST
    // Rider Payment
    // Company 
}



payment(500,placeOrder);
// payment(300,blinkitOrderPlaced);