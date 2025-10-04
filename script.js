const frasesDeAmor = [
    { frase: "Mi lugar favorito en el mundo es dentro de tu abrazo.", autor: "Anónimo" },
    { frase: "Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección.", autor: "Antoine de Saint-Exupéry" },
    { frase: "Te quiero no por quien eres, sino por quien soy cuando estoy contigo.", autor: "Gabriel García Márquez" },
    { frase: "Eres mi hoy y todos mis mañanas.", autor: "Anónimo" },
    { frase: "Tus ojos son el reflejo del alma que siempre busqué.", autor: "Anónimo" }
];

const fraseDisplay = document.getElementById('frase-display');
const autorDisplay = document.getElementById('autor-display');
const botonCambiar = document.getElementById('boton-cambiar-frase');

let ultimaFraseIndex = -1;

function mostrarNuevaFrase() {
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * frasesDeAmor.length);
    } while (indiceAleatorio === ultimaFraseIndex);
    
    ultimaFraseIndex = indiceAleatorio;
    const fraseSeleccionada = frasesDeAmor[indiceAleatorio];

    fraseDisplay.classList.add('fade-out');

    setTimeout(() => {
        fraseDisplay.textContent = `"${fraseSeleccionada.frase}"`;
        autorDisplay.textContent = `- ${fraseSeleccionada.autor}`;
        
        fraseDisplay.classList.remove('fade-out');
        fraseDisplay.classList.add('fade-in');

        setTimeout(() => {
            fraseDisplay.classList.remove('fade-in');
        }, 500); 
        
    }, 500);
}

botonCambiar.addEventListener('click', mostrarNuevaFrase);