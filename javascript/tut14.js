console.log('Welcome to tutorial 14');

/*Element selector
1.single element selector
2.multiple element selector*/

//1.single element selector
let element=document.getElementById('first');
//element=element.ClassName;
//element=element.childNodes;
//element=element.parentNode;
//element.style.color='red';
//element.innerText='tanuja is good';
//console.log(element);


let sel=document.querySelector('#first');
sel=document.querySelector('.child');
sel=document.querySelector('b');
sel=document.querySelector('div');
sel.style.color='green';
console.log(sel);


//2.multiple element selector
let element1=document.getElementsByClassName('child');
element1=document.getElementsByClassName('container');
element1=document.getElementsByTagName('div');
console.log(element1);

//we can also use for loop
for (let index = 0; index < element1.length; index++) {
    const element = element1[index];
    console.log(element);
    
}
/*
Array.from(element1).forEach(element => {
    console.log(element);
    element.style.color='blue';
    
})*/
//console.log(element1[0].getElementsByClassName('child'));
