const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
// function mudarFundo() {
//     let body = document.body;
//     body.style.background = "rgb(33,150,243)";
//     body.location.reload();
// }

var reload = document.querySelector("#refresh");
reload.addEventListener("click", function() {
    location.reload()
})


document.getElementById('btn-laranja').addEventListener("click", function(){
document.querySelector("body").setAttribute("class","laranja");
});

document.getElementById('btn-vermelho').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","vermelho");
    });

document.getElementById('btn-purpura').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","purpura");
    });

const relogio = setInterval(function time () {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min =  dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

