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

let getEmpleado= (id)=>{
    return new Promise((resolve, reject)=>{
        let EmpleadoDB = empleados.find(empleado => empleado.id == id);
        if(!EmpleadoDB){
            reject (`No existe un empleado con el ID ${id}`); 
        }else{
            resolve(EmpleadoDB);
        }
    })
}
let getdepartamento = async (empleado) =>{
        let departamentoDB = departamentos.find(departamento => departamento.id === empleado.departamento);
        if(!departamentoDB){
            throw new Error(`el empleado no trabaja en ningun departamento`)
        }else{
            return {
                nombre:empleado.nombre,
                departamento: departamentoDB.nombre
            };
        }
}
/*getEmpleado(20).then(empleado =>{
    getdepartamento(empleado).then(resp =>{
        console.log(`${resp.nombre} trabaja en ${resp.departamento}`);
    }, err=>{
        console.log(err);
    })
}, err =>{
    console.log(err);
})
*/
let getInformacion = async(id) =>{
    let empleado = await getEmpleado(id);
    let salario = await getdepartamento(empleado)
    return `el Empleado ${empleado.nombre} trabaja ${salario.nombre}`;
}

getInformacion(12).then(mensaje =>{
    console.log(mensaje);
}).catch(e=>{
    console.log("Error en  datos ", e)
});