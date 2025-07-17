//Referencias
const bot = document.getElementById("Bot");
const user = document.getElementById("User");
const imgBot = document.createElement("img");
const imgUser = document.createElement("img");
const btn1 = document.querySelector(".op1");
const btn2 = document.querySelector(".op2");
const btn3 = document.querySelector(".op3");
let salida = document.getElementById("salida");

//Características Imagen del Bot
imgBot.src = "img/Signo.webp";
imgBot.alt = "Aleatorio";
imgBot.style.width = `${bot.style.width}`;
imgBot.style.mixBlendMode = "multiply";
bot.appendChild(imgBot);

//Características Imagen del User
imgUser.src = "img/Signo.webp";
imgUser.alt = "Aleatorio";
imgUser.style.width = `${user.style.width}`;
imgUser.style.mixBlendMode = "multiply";
user.appendChild(imgUser);

//Lógica
let userOpcionImg = "";
let botOpcion = "";
let intervalID = null;
let isRunning = false;
const timeInterval = 90;
const timeReset = 3000;

const imgOpcion = ["./img/Piedra.webp", "./img/Papel.webp", "./img/Tijera.webp"];

const Reglas = {
    piedra: "tijera",
    tijera : "papel",
    papel: "piedra"
};



//Animación y control
function animRandom(Controlador){
    let n = Math.floor(Math.random() * 3);
    switch(n){
        case 0: Controlador.src = imgOpcion[0];
                botOpcion = Reglas.papel; break;
        case 1: Controlador.src = imgOpcion[1];
                botOpcion = Reglas.tijera; break;
        case 2: Controlador.src = imgOpcion[2];
                botOpcion = Reglas.piedra; break;
        default: Controlador.src = "./img/Signo.webp";
    }
}

//Proceso de animación y resultado
function elegir(opcion){
    isRunning = true;
    iniciarAnimation();
    setTimeout(() => {
        terminarAnimation();
        // console.log("User:" + opcion);
        // console.log("Bot:" + botOpcion);
        Comparador(opcion, botOpcion);
        Reseteo();
    }, 1200);
}

//Compara el resultado y lo plasma
function Comparador(userOpcion, botOpcion){
    if (userOpcion == "piedra" && botOpcion == "tijera"){
        cambioColor(true);
    }else if(userOpcion == "papel" && botOpcion == "piedra"){
        cambioColor(true);
    }else if(userOpcion == "tijera" && botOpcion == "papel"){
        cambioColor(true);
    }else if(userOpcion == "piedra" && botOpcion == "piedra") {cambioColor(null)}
    else if(userOpcion == "papel" && botOpcion == "papel") {cambioColor(null)}
    else if(userOpcion == "tijera" && botOpcion == "tijera"){
        cambioColor(null)
    }else{
        cambioColor(false);
    }
}

function cambioColor(caso){
    switch(caso){
        case true:
            salida.style.backgroundColor = "green";
            salida.style.color = "white";
            salida.innerHTML = "Ganaste!";
            // console.log("Ganaste!");
            break;
        case false:
            salida.style.backgroundColor = "red";
            salida.style.color = "white";
            salida.innerHTML = "Perdiste!";
            // console.log("Perdiste!");
            break;
        default:
            salida.style.backgroundColor = "aqua";
            salida.style.color = "black";
            salida.innerHTML = "Empate!";
            // console.log("Empate!");
    }
}

//Animación Empezar
function iniciarAnimation(){
        if (!intervalID){
        intervalID = setInterval(() => {
            animRandom(imgBot);
            }, timeInterval);
        }
}

//Animación Terminar
function terminarAnimation(){
    clearInterval(intervalID);
    intervalID = null;
}

function Reseteo(){
    setTimeout(() => {
        salida.style.backgroundColor = "white";
        salida.style.color = "black";
        salida.innerHTML = "Salida";
        imgBot.src = "img/Signo.webp";
        imgUser.src = "img/Signo.webp";
        isRunning = false
        }, timeReset);
}

//Click a los botones
btn1.addEventListener("click", () => {
    if (!isRunning){
    elegir("piedra");
    imgUser.src = imgOpcion[0];
    }
    
});
btn2.addEventListener("click", () => {
    if (!isRunning){
    elegir("papel");
    imgUser.src = imgOpcion[1];
    }
});
btn3.addEventListener("click", () => {
    if (!isRunning){
    elegir("tijera");
    imgUser.src = imgOpcion[2];
    }
});







