//requireds
const fs = require('fs');
const {crearArchivo } = require('./multiplicar/multiplicar');

//const ex = require('express);
//const pa = require('./aps.js);
let base = 'sed';
/*
let data = '';
for (let index = 1; index < 11; index++) {
    data +=`${base} x ${index} = ${base*index} \n`; 
}

fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archoivo tabla${base}.txt ha sido creado!`);
});
*/

crearArchivo(base).then(archivo =>{
  console.log(`Archivo Creado ${archivo}`)  
}) 

console.log(module);