console.log('This is tut 18');
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dbclick',func2);


function func1(e){
    console.log("Thanks",e);
    e.preventDefault();
}

function func2(e){
    console.log("Thanks its a double click",e);
    e.preventDefault();
}
