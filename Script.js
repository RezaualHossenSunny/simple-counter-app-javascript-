const inrement = document.getElementById('inccrement');
const decrement = document.getElementById('Decrement');
const count =document.getElementById('count');

let countEl=0;

inrement.addEventListener('click', ()=>{
    countEl ++;
    count.innerText=countEl;
});


decrement.addEventListener('click', ()=>{
    countEl -- ;
    count.innerText=countEl;
});