console.log("We are at tutorial 9");

/*let a=23;
a+=1;//ye dono same h kse v use
a++;// ye dono
console.log(a);*/

//loop 1.for loop 2.while loop 3.do.while

/*for
for(let i=0;i<=10;i++){
    console.log(i);
}*/

/*while
let j=0;
while(j<=10){
    console.log(j);
    j++;
}*/

/*do.while

let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);*/

//break and continue.
/*let k = 0;
do {
  console.log(k);

  if (k === 5) {
    break;
  }
  k++;
} while (k <= 10);
console.log('done');*/

/*let k = 0;
do {
  if (k === 5) {
      k++;
    continue;
  }
  
  console.log(k);
  k++;

} while (k <= 10);
console.log('done');*/

/*//For each
let arr=[23,34,56,76];
arr.forEach(function(element,index,array){
    console.log(element);
});*/


//it is when we deal with object many time(more n more)
let obj={
    name:'tanu rajput',
    age:12,
    type:'programmer',
    os:'ubuntu'
}
for(let key in obj){//to find the value to key written in obj
   // console.log(obj[key]);
   console.log(`The ${key} of object is ${obj[key]}`);
}
console.log(obj);