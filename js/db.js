//funcion para traer por la API los automoviles
const automoviles = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	const response = await fetch("https://apiautomovil-production-0c64.up.railway.app/api/automoviles", requestOptions);
	const resultado = await response.json();

	if ( response.status === 200 ) {
		//retornamos nadamas los automoviles
		return resultado.automoviles;
	}
}
//exports
export {
	automoviles
};