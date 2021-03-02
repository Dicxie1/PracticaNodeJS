let nombre = 'Dicxie';
let apellido = 'Madrigal';

console.log( nombre + ' ' + apellido);
console.log(`${nombre} ${apellido}`);
console.log(`${getNombre()} `);

function getNombre(){
    return `${nombre} ${apellido}`;
}