function saludar (nombre = ""){
    let mensaje =`Hola ${nombre}`;
    return mensaje;
}
let saludo = saludar('Dicxie');
console.log(saludo);