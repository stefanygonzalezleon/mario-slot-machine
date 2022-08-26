const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

const palancaUp = document.getElementById("palancaUp");
const palancaDown = document.getElementById("palancaDown");
const coins = document.getElementById("coin");
const sonido = new Audio("audio/palanca.mp3")

var timerID = null;

function myFunction() {

    const results = [];
    const limit = 6;
    //lo que hace que se ejecute cada X tiempo
    timerID = setTimeout("ocultarMensaje()", 1800);
    palancaDown.style.visibility = "visible";
    palancaUp.style.visibility = "hidden";
    sonido.play();
            //mientras se cumpla una condición
    while (results.length < limit) {
        // obtenemos los numeros aleatorios entre 0 y 80, entero redondeado más bajo.
        const number = Math.floor(Math.random() * 80 +1);
        // Lo agregamos al array
        if (!results.includes(number)) {
            results.push(number);
            card1.innerHTML = results[0];
            card2.innerHTML = results[1];
            card3.innerHTML = results[2];
            card4.innerHTML = results[3];
            card5.innerHTML = results[4];
            card6.innerHTML = results[5];

        }
    }
    console.log(results);
}

function ocultarMensaje() {
    palancaDown.style.visibility = "hidden";
    palancaUp.style.visibility = "visible";
    // card1.appendChild(coins);
    clearTimeout(timerID);
}


