console.log('Welcome to tutorial 15');

let cont=document.querySelector('.no');
cont=document.querySelector('.container');
//console.log(cont.childNodes);
//console.log(cont.children);//ye space wagera ni dikhta
let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);
//console.log(cont);

/*Node Types
1.Element
2.Attribute
3.Text Node
8.Comment
9.document
10.docType*/

let container=document.querySelector('.container');
//console.log(container);
//console.log(container.children[1].children);//isse iske andr k children v mil jaenge
//console.log(container.children[1].children[0].children);
//console.log(container.firstChild);//text ,comment ye sb milega
//console.log(container.firstElementChild);//isse element milega

//console.log(container.lastChild);//same as firstchild
//console.log(container.lastElementChild);
//console.log(container.childElementCount);//count of child elements

//console.log(container.firstElementChild);
//console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.parentNode.nextSibling);//isme kch v mil skta  chahe wo text ho ya comment
console.log(container.firstElementChild.parentNode.nextElementSibling);//isse element milega

