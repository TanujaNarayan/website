console.log("this is tut 10");

let mygreet = function (name, thank = "Thank you!!") {
  let msg = ` Happy Birthday ${name} god bless you and party hard ${thank} `;
  // return 2;
  return msg;
};

let name = "Tanuja";
let name1 = "Happy";

//mygreet(name);
//mygreet(name1, "thanks alot babes");
let val = mygreet(name1, "thanks alot babes");
console.log(val);

/*const obj={
     name:'Tanuja',
     age:23,
     job:'software engineer',
     game:function () {
         return 'GTA';
     }
 }
 console.log(obj.game());*/

/*const arr=[12,45,65,76];
 arr.forEach(function(element,index,array) {
     console.log(element,index);
     
 })*/
