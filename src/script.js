// Ejercicio 1: Verificación de Calificaciones
function verificarCalificacion() {
    let calificacion = document.getElementById("calificacion").value;
    let mensaje;

    if (calificacion >= 90 && calificacion <= 100) {
        mensaje = "Aprobado con honores";
    } else if (calificacion >= 70 && calificacion < 90) {
        mensaje = "Aprobado";
    } else if (calificacion < 70 && calificacion >= 0) {
        mensaje = "Reprobado";
    } else {
        mensaje = "Por favor, ingresa un número entre 0 y 100";
    }

    document.getElementById("resultado1").textContent = mensaje;
}

// Ejercicio 2: Determinación de Número Par o Impar
function determinarParImpar() {
    let numero = document.getElementById("numero").value;
    let mensaje;

    if (numero % 2 === 0) {
        mensaje = "El número es par.";
    } else {
        mensaje = "El número es impar.";
    }

    document.getElementById("resultado2").textContent = mensaje;
}

// Ejercicio 3: Evaluación de Descuentos
function evaluarDescuento() {
    let monto = parseFloat(document.getElementById("monto").value);
    let descuento = 0;
    let total;

    if (monto > 100) {
        descuento = monto * 0.1;
    }

    total = monto - descuento;
    document.getElementById("resultado3").textContent = 
        `Monto final a pagar: $${total.toFixed(2)}`;
}

// Ejercicio 4: Juego de Adivinanza de Números
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function jugar() {
    let adivinanza = parseInt(document.getElementById("adivinanza").value);
    let mensaje;

    if (adivinanza === numeroAleatorio) {
        mensaje = "¡Felicidades, adivinaste el número!";
    } else {
        mensaje = `Lo siento, el número era ${numeroAleatorio}.`;
    }

    document.getElementById("resultado4").textContent = mensaje;
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
}
