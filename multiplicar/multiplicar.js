const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, hasta) => {

	console.log('===================='.blue);
	console.log(`====Tabla del ${ base }=====`.red);
	console.log('===================='.blue);

	for (let i = 0; i <= hasta; i++) {
		console.log(`${ base } * ${ i } = ${ base * i }`)
	}

}

let crearArchivo = (base, hasta) => {
	
	return new Promise ((resolve, reject) => {

		if (!Number(base)) {
			reject(`La base introducida ${ base } no es un número`);
			return;
		}

		if (!Number(hasta)) {
			reject(`El límite introducido ${ hasta } no es un número`);
			return;
		}

		let data = '';

		for (let i = 0; i <= hasta; i++) {
			data += `${ base } * ${ i } = ${ base * i }\n`;
		}

		fs.writeFile(`tablas/tabla-${ base }-al-${ hasta }.txt`, data, (err) => {
  			if (err) reject(err)
  			else
  				resolve(`tabla-${ base }-al-${ hasta }.txt`)

		});

	});

}

module.exports = {
	listarTabla,
	crearArchivo
}