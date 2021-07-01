console.log("this is tut 6")


const name="Tanuja";
const greetings="Good Night";
//console.log(name + " "+greetings);
console.log(name.concat(greetings));

let html;
html='<h1>this is heading</h1>'+ '<p>this is para</p>';
html=html.concat('this');
console.log(html);

//String Method
let strName="Happy";
console.log(strName.charAt(2));
console.log(strName.length);
console.log(strName.toLowerCase());
console.log(strName.toUpperCase());
console.log(strName.indexOf('a'));
console.log(strName[4]);
console.log(strName.lastIndexOf('y'));
console.log(strName.endsWith('t'));
console.log(strName.includes(" "));//isko use krke dkh skte hai ki ni
console.log(strName.substring(1,3));
console.log(strName.slice(0,3));
console.log(strName.split(''));//array me convert kr deta h
console.log(strName.replace('H','t'));

//template literals
let fruit1='Mango\'';
let fruit2='litchi';
let myHtml= `Hello ${name} 
                <h1>this is heading</h1>
                <p>you like ${fruit1} and ${fruit2}</p>
`;

document.body.innerHTML=myHtml;