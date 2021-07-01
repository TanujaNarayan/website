console.log("tut3");
// Variables in js
// var(global level scope), let(block level scope), const

var name = "tanuja";
console.log(name);

var channel;
console.log(channel);

var marks = 34;
console.log(marks);

let city = "delhi";
console.log(city);

const bfName = "abhinav";
//bfName='tappy';//cannot do this its show error because const m apun const ka value change ni kr skte lekin push se add kr skte h
console.log(bfName);

{
  let city = "rampur";
  city = "Kolkata";
  console.log(city);
}
console.log(city);

const arr = [12, 34, 54, 65];
arr.push(27);
console.log(arr);



/*Rules for creating JavaScript Variables
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/

/* Most common programming case types:
1. camelCase  (we use this)
2. kebab-case
3. snake_case 
4. PascalCase 
*/
