console.log('Campo Minato')

let dimensioneGriglia = 10;
let numeroCelle = dimensioneGriglia ** 2;
const tabelloneEl = document.querySelector('.tabellone');


const start = document.querySelector('.button');
start.addEventListener('click', function(){

for(let i = 0; i < numeroCelle; i++){
    
    const cella = getSquareElement();
    
    tabelloneEl.append(cella);
    
}
})  

function getSquareElement(){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('click', clickHandler); 
    return square;

}

function clickHandler(){
    const square = this;
    square.classList.toggle('clicked')  
    square.removeEventListener('click', clickHandler)
}