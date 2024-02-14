const relogio = setInterval(function time() { 
let data = new Date();
let hora =  data.getHours();
let min =  data.getMinutes();
var sec = data.getSeconds();


document.getElementById('hor').textContent = hora
document.getElementById('min').textContent = min
document.getElementById('sec').textContent = sec


if( sec < 10 ) {
    document.getElementById('sec').innerHTML = '0'+ sec
}
else{
    
}




if( min < 10 ) {
    document.getElementById('min').innerHTML = '0'+ min
}
else{
    
}

if( hora < 10 ) {
    document.getElementById('hor').innerHTML = '0'+ hora
}
else{
    
}

















})