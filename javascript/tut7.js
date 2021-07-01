console.log("this is tut7");

//1
let marks=[34,56,78,87,89];
const fruits=['apple','mango','papaya','orange'];
const mixed=[23,45,67,'mango','orange','pineapple'];
console.log(marks);
console.log(fruits[2]);
console.log(mixed);

//2
const arr=new Array(23,45,67,'apple','banana');
console.log(arr.length);
console.log(Array.isArray('arr'));
console.log(arr.indexOf(45));




//3
arr[0]='tanuja';
let arrelement=arr[0];
console.log('element:', arrelement);

//4 mutating or modifying element
let marks1=[66,88,99,77,33,22];
//marks1.push(42);//array ke end m add krta h.
//marks1.unshift(12);//array ke start m add krta h.
//marks1.pop();//array k end se delete krta h.
//marks1.shift();//array k start se delete krta h
//marks1.splice(1,2);
//marks1.reverse();
//console.log(marks1);
/*marks=marks.concat(marks1);
console.log(marks);*/

//Objects
let myObj={
    name:'tanuja',
    job:'software engineer',
    age:23,
    isActive:true,
    marks:[67,87,98]
}
console.log(myObj);
console.log(myObj.isActive);
console.log(myObj['job']);

//Agr element store krna h to Array use kro aur jb agr value pair(eg->name:'tanuja',age:23) element use krna hoga to object use kro.

