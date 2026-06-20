// Array--->

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"Rohit",true];
// console.log(arr[3]);

//Changing Value in array---->
// arr[2] = "Aryan";
// console.log(arr);

// Adding element in array---->(Push:Insert element at end)
// arr.push (46);
// arr.push ("Strike")
// console.log(arr);

// pop:Delete Element From end 
// arr.pop();
// console.log(arr);

// Adding element in starting index:
// arr.unshift(10);
// console.log(arr);

// Delete element from starting index:
// arr.shift();
// console.log(arr);

// console.log(arr.length);

// Iterating with For loop-->

// let arr = [10,30,50,90,11];
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// for (let num of arr){
//     console.log(num);
// }

// Copying Arrays:copy by reference
// Object (non primitive) : Copy by reference hote hai.
// Primitive : Copy by value.
// let arr = [10,30,50,90,11];
// let arr2 = arr;
// arr2.push(30);
// console.log(arr);
// console.log(arr2);

// Using Const with array--->
// const arr = [10,30,50,90,11];
// arr[2] = 30 ;
// arr.push("Siddhu");
// // arr = [80,90,22];
// console.log(arr);

// Array Slice--->
// const arr = [10,30,50,90,11];
// console.log(arr.slice(2,4));

// console.log(arr.splice(1,2,"Rohit",19));
// console.log(arr);

// Merging Array with spread operator-->
// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit", 11, true];
// const arr4 = [9,4,false];
// const arr3 = arr.concat(arr2,arr4);
// console.log(arr3);
// Spread Operator-->
// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);


// Converting array to string -->

// const names = ["Alice","Bob","Charlie"] ; 
// console.log(names.toString());
// console.log(names.join("-"));


// Searching In array---->

// const names = ["Alice","Bob","Charlie","Bob"] ; 
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bob"));

// Sorting array of string-->
// const names = ["alice","Rohit","Bob","Mohit","Charlie"] ; 
// names.sort();
// names.reverse();
// console.log(names);


// const a = [101 ,90, 80, 32, 91];
// const arr = [10, "Rohit", "Mohan", true];
// arr.sort();
// console.log(arr);

// const a = [10, 40, 31, 71, 5, 11];
// a.sort((a, b) => a - b);//Ascending order:
// a.sort((a,b) => b-a);//Decending order:
// console.log(a);


// Flatted array-->
//   const arr = [10,30,50,[40,90,11],80];
//  const a = arr.flat(Infinity);
//   console.log(a);

