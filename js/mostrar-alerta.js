import { limpiarHTML } from "./mostrar-autos.js";

//funcion para mostrar la alerta
const mostrarAlerta = ( mensaje ) => {
    //selector
    const resultado = document.querySelector('#resultado');
    //limpiar el HTML anterior
    limpiarHTML( resultado );
    //HTML
    const alerta = document.createElement('p');
    alerta.classList.add('error');
    alerta.textContent = mensaje;
    //renderizar
    resultado.appendChild( alerta );
}
//export
export {
    mostrarAlerta
}