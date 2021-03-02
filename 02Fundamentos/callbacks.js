/*
setTimeout( function() {
    console.log('Hola Mundo')
}, 3000)
*/

let getEmpleadoById = ( id, callback)=>{
    let Empleado = {
        id,
        nombre: "Dicxie",
        apellido : "Madrigal",
        salario : 200.140
    }
    if(id === 20){
        callback(`El usuario con id ${id}  existe  en la base de datos`)
    }
    else{
        callback(null, Empleado)
    }
}

getEmpleadoById(20, (err, Empleado)=>{
    if(err){
       return console.log(err);
    }
    console.log('Usuario de Base de datos', Empleado)
}
)