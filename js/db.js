//funcion para traer por la API los automoviles
const automoviles = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	const response = await fetch("http://localhost:5000/api/automoviles", requestOptions);
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