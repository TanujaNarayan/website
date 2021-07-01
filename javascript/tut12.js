console.log('Welcome to tut 12.js');
let a=document;
a=document.all;//html ka collection
//a=document.body;
//a=document.forms;
//console.log(a);

/*Array.from(a).forEach(function(element){
    console.log(element);
})*/

//a=document.links;
//a=document.links[0];
a=document.links[0].href;
console.log(a);
