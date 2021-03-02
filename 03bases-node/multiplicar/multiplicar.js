const fs = require('fs');
let crearArchivo = (base) =>{
    return new Promise((resolve, rejects)=>{
        if(!Number(base)){
            rejects(`No ${base} no es un número`);
            return;
        }
        let data = '';
        for (let index = 1; index < 11; index++) {
            data +=`${base} x ${index} = ${base*index} \n`; 
        }
        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) rejects(err);
            else
                resolve(`tabla-${base}.txt`);
        });})
}
module.exports = {
    crearArchivo
};
console.log(module.exports);