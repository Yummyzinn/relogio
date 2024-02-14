const relogio = setInterval(function time(){ 
let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();
let sec = data.getSeconds();


document.getElementById('hor').textContent = hora
document.getElementById('min').innerHTML = min
document.getElementById('sec').textContent = sec
})