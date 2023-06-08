//autos desde la BD
import { automoviles } from "./js/db.js";
//fucnion para mostrar los autos en el HTML
import { mostrarResultados } from "./js/mostrar-autos.js";
//mostrar los años en el input
import { mostrarYears } from "./js/mostrar-years.js";


document.addEventListener('DOMContentLoaded', async() => {
    //marca
    const marca = document.querySelector('#marca');
    //year
    const year = document.querySelector('#year');
    //precio
    const precio = document.querySelector('#precio');
    //puertas
    const puertas = document.querySelector('#puertas');
    //transmision
    const transmision = document.querySelector('#transmision');
    //color
    const color = document.querySelector('#color');
    //creamos un objeto con las opciones seleccionadas
    let arregloBusqueda = {};

    
    //mostrar autos
    const autos = await automoviles();
    //mostrar los resultados 
    mostrarResultados( autos );
    //mostrar años
    mostrarYears();
});