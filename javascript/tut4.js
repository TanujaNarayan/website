//primitive data types

//1.String

let name = "tanuja";
console.log("My string name is" + " " + name);

//2.numbers
let marks = 34;
console.log("Data type is" + " " + typeof marks);

//to find the data type
let name1 = "tanuja";
console.log("Data Type is" + " " + typeof name1);

//3. boolean
let isDriver = true;
console.log("Data Type is" + " " + typeof isDriver);

//4.null
let nullVar = null;
console.log("Data type is" + " " + typeof nullVar);

//5.undefined

let undef = undefined;
console.log("Data type is" + " " + typeof undef);

//Reference datatype

//1.array
let myArr = [1, 3, 2, 45, 56, false, "tanuja"]; //always return object
console.log("Data type is" + " " + typeof myArr);

//2.object literals

let marks1 = {
  tanuja: 98,
  sparsh: 12,
  uday: 87,
};
console.log(typeof marks1);

//3.function

function findname() {}
console.log(typeof findname);

//4.date

let date = new Date();
console.log(typeof date);
