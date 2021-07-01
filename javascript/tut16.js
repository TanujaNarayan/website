console.log("this is tut 16");

let element = document.createElement("li");
let text=document.createTextNode('I am  text node');
element.appendChild(text);
//add a class name to the element
element.className = "childul";
element.id = "createdli";
element.setAttribute("tile", "mytitle");
//element.innerText='hello this is created by harry';//ye bs text dega isme apun html tag ni use kr skte h
//element.innerHTML = "<b>this is my html with the help of innerhtml</b>"; //innerhtml k use krke apun html tag use kr skte h

let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);

//Replace element
let element1=document.createElement('h3');
element1.id='elem1';
element1.className='elem1';
let tnode=document.createTextNode('this is created node for element1');
element1.appendChild(tnode);

//element.replaceWith(element1);

let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
//console.log(element1);

//let pr=element1.getAttribute('class');
//console.log(pr);

let pr=element1.hasAttribute('class');
element1.removeAttribute('id');
console.log( element1,pr);

