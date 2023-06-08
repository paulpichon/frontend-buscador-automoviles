//funcion para mostrar los años
const mostrarYears = () => {
    //input
    const year = document.querySelector('#year');
    //años
    const yearMaximo = new Date().getFullYear();
    //año minimo
    const yearMinimo  =  yearMaximo - 13;
    
    for (let i = yearMaximo; i >= yearMinimo; i--) {
        //crear elemento option para el select input
        const option = document.createElement('option');
        //option texcontent
        option.textContent = i;
        option.value = i;
        //renderizar en el HTML
        year.appendChild( option )
    }

}
//exports
export {
    mostrarYears
}