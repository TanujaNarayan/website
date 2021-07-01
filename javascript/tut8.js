console.log("this is tut 8");

//if..else
let age = "89";
if (age == 21) {
  console.log("i m mature");
} else if (age == 45) {
  console.log("i m double mature");
} else if (age !== 89) {
  console.log("i m triple mature");
} else {
  console.log("i m not mature");
}

//2
const doesDrive = false;
if (doesDrive == false) {
  console.log("you can drive");
} else {
  console.log("you cant drive");
}

//3//&&->and ||->or
let myName = "tanuja";
if (myName || doesDrive || age) {
  console.log(" i my fully good person");
} else {
  console.log("not good person");
}



//ternary operator
console.log(age == 45 ? "i m double mature" : "i m not mature");

//switch case
age1=22;
switch (age1) {
  case 18:
    console.log("you r 18");
    break;
  case 19:
    console.log("you r 19");
    break;
  case 20:
    console.log("you r 20");
    break;
  case 21:
    console.log("you r 21");
    break;

  default:
      console.log(' you a good coder');
    break;
}
