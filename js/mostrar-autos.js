//funcion para mostrar los resultados
const mostrarResultados = ( autos ) => {
    const resultados = document.querySelector('#resultado');
    //recorrer el arreglo
    autos.forEach( auto => {
        //desestructurar
        const { marca, modelo, year, precio, puertas, transmision, color } = auto;
        //HTML
        const p = document.createElement('p');
        //texcontent
        p.textContent = `${ marca } ${ modelo } ${ year } - $ ${ precio} - Puertas:${ puertas } - Transmision: ${ transmision } - Color: ${ color }`;
        //
        resultados.appendChild( p );

    });
}
//exports
export {
    mostrarResultados
}