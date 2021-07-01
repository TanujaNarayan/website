//type conversion 

console.log("welcome to tut5");

let myVar = String(34);
//console.log(myVar, typeof myVar);

let boolVar = Number(true);
//console.log(boolVar, typeof boolVar);

let nullVar = Boolean(null);
//console.log(nullVar, typeof nullVar);

let dateVar = String(new Date());
//console.log(dateVar, typeof dateVar);

let arr1 = String([1, 2, 3, 4, 5, 6]);
//console.log(arr1.length, typeof arr1);

let i = 8;
//console.log(i.toString());

let numVar = String(8);
//console.log(numVar, typeof numVar);

let stri1 = Number("8");
stri1 = Number("343d4");
stri1=Number([1,2,3,4,5,6,7]);
console.log(stri1, typeof stri1);

let number=parseInt('34');
console.log(number,typeof number);

let number2=parseInt('34.5673');//ye bs . k phle wala ko print krega
console.log(number2,typeof number2);

let number3=Number('34.5673');//ye pura value dega
console.log(number3,typeof number3);



let number1=parseFloat('34.8978');
console.log(number1.toFixed(2),typeof number1);


 //type coersion

 let mystr="698";
 let mynum=34;
 console.log(mystr+mynum);