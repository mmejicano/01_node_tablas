const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar, hasta=10) => {
  try {
    let resultado = '';
    for (let i = 1; i <= hasta; i++) {
      resultado += `${base} x ${i} = ${base * i} \n`;
    }

    if (listar) {
      console.log('============='.green);
      console.log(`Tabla del: ${base}`.yellow);
      console.log('============='.green);
      console.log(resultado);
    }

    let archivo = `./archivos/tabla_${base}.txt`;
    fs.writeFileSync(archivo, resultado);

    return `Archivo ${archivo.green} creado exitosamente`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
