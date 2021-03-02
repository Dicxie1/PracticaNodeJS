let empleados =[{
    id: 10,
    nombre: "Dicxie",
    apellido: "Madrigal",
    salario: 3000,
    departamento: 1
},{
    id: 20,
    nombre: "Maria",
    apellido:"Gonsalez",
    salario: 32000,
    departamento: 2
}
];
let departamentos =[
    {
        id: 1,
        nombre: "Ventas"
    },
    {
        id:2,
        nombre:"Administracion"
    }
];

let getEmpleado = ( id, callback) =>{
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if(!empleadoDB){
        callback(`No Existe en la base de datos un empleado con el id ${id}`);
    }else{
        callback(null, empleadoDB);
    }
}
let getSalario = (empleado,callback)=>{
    let departamentoDB = departamentos.find(departamento => departamento.id === empleado.departamento);
    if(!departamentoDB){
        callback(`No existe el departamento con ID ${departamento.id}`);
    }else{
        callback(null,{
            empleado: empleado.nombre,
            departamento: departamentoDB.nombre
        });
    }
}

getEmpleado(10, (err, empleado)=>{
    if(err){
         return console.log(err)
    }
        getSalario(empleado,(err, response) =>{
            if(err){
                 return console.log(err); 
            }else{
                console.log(`${response.empleado} trabaja en el departamento de ${response.departamento}`);
            }
        });
});

/*
let emp = empleados[1];
getSalario(emp, (err, departamento)=>{
    if(err){
        return console.log(err);
    }
    console.log(departamento);
})*/