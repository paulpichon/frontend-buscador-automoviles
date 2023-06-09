//autos desde la BD
import { automoviles } from "./db.js";
//importar la funcion para mostrar las alertas
import { mostrarAlerta } from "./mostrar-alerta.js";
//fucnion para mostrar los autos en el HTML
import { mostrarResultados } from "./mostrar-autos.js";
//mostrar los años en el input
import { mostrarYears } from "./mostrar-years.js";

//marca
const marca = document.querySelector('#marca');
//year
const year = document.querySelector('#year');
//precio minimo
const precioMinimo = document.querySelector('#minimo');
//precio maximo
const precioMaximo = document.querySelector('#maximo');
//puertas
const puertas = document.querySelector('#puertas');
//transmision
const transmision = document.querySelector('#transmision');
//color
const color = document.querySelector('#color');
//creamos un objeto con las opciones seleccionadas
let arregloBusqueda = {};
//declarar las propiedades del arreglo en vacio
arregloBusqueda = {
    marca: '',
    year: '',
    precioMaximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', async() => {
    
    //marca
    marca.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.marca = e.target.value;
        filtrarAutos();
    });
    //year
    year.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.year = parseInt( e.target.value );
        filtrarAutos();
    });
    //precioMinimo
    precioMinimo.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.precioMinimo = parseInt( e.target.value );
        filtrarAutos();
    });
    //precioMaximo
    precioMaximo.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.precioMaximo = parseInt( e.target.value );
        filtrarAutos();
    });
    //puertas
    puertas.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.puertas = parseInt( e.target.value );
        filtrarAutos();
    });
    //transmision
    transmision.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.transmision = e.target.value;
        filtrarAutos();
    });
    //color
    color.addEventListener('change', ( e ) => {
        //agregar la propiedad a el objeto 
        arregloBusqueda.color = e.target.value;
        filtrarAutos();
    });
    
    //mostrar autos
    const autos = await automoviles();
    //mostrar los resultados 
    mostrarResultados( autos );
    //mostrar años
    mostrarYears();
});

//funciones
const filtrarAutos = async() => {
    //mostrar autos
    //recorrer con el arrego autos el arreglo original
    const autos = await automoviles();
    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    //verificar si la constante trae informacion
    if ( resultados.length > 0 ) {
        //llamar la funcion para mostrar los resultados una vez filtrados
        mostrarResultados( resultados );
    }else {
        //funcion para mostrar alerta
        mostrarAlerta('No hay resultados');
    }
}
//filtrar por marca
const filtrarMarca = ( auto ) => {
    //desestructurar el arreglo
    const { marca } = arregloBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }else {
        //si no hay seleccion retornamos todo el arreglo auto
        return auto;
    }
}
//filtrar por año
const filtrarYear = ( auto ) => {
    //desestructurar el arreglo
    const { year } = arregloBusqueda;
    if ( year ) {
        return auto.year === year;
    }else {
        //si no hay seleccion retornamos todo el arreglo auto
        return auto;
    }
}
//filtrar por precio minimo
const filtrarMinimo = ( auto ) => {
    //desestructurar el arreglo
    const { precioMinimo } = arregloBusqueda;
    if ( precioMinimo ) {
        return auto.precio >= precioMinimo;
    }else {
        //si no hay seleccion retornamos todo el arreglo auto
        return auto;
    }
}
//filtrar por precio maximo
const filtrarMaximo = ( auto ) => {
    //desestructurar el arreglo
    const { precioMaximo } = arregloBusqueda;
    if ( precioMaximo ) {
        return auto.precio <= precioMaximo;
    }else {
        //si no hay seleccion retornamos todo el arreglo auto
        return auto;
    }
}
//funcion para filtrar por puertas
const filtrarPuertas = auto => {
    //destructuring
    const { puertas } = arregloBusqueda;
    //si viene puertas
    if ( puertas ) {
        return auto.puertas === puertas;
    }else {
        return auto;
    }
}
//funcion para filtrar por transmision
const filtrarTransmision = ( auto ) => {
    //desestructurar
    const { transmision } = arregloBusqueda;
    //si viene puertas
    if ( transmision ) {
        return auto.transmision === transmision;
    }else {
        return auto;
    }
}
//funcion para filtrar por color
const filtrarColor = ( auto ) => {
    //desestructurar
    const { color } = arregloBusqueda;
    //si hay color
    if ( color ) {
        return auto.color === color;
    }else{
        return auto;
    }
}