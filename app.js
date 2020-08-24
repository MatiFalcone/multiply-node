const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
	case 'listar':
		listarTabla(argv.base, argv.hasta);
		break;
	case 'crear':
		crearArchivo(argv.base, argv.hasta)
			.then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
			.catch(error => console.log(error));
		break;
	default:
		console.log('Comando desconocido');

}

