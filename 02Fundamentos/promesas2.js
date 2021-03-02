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
/*
 el siguiente ejemplo sobre promesas en NodeJs
 */
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
/*
    otro ejemplo de promesas en NodeJS que devuelve información sobre el
    departamento que trabaja un empleado 
*/
let getdepartamento =  (empleado) =>{
    return new Promise((resolve, reject)=>{
        let departamentoDB = departamentos.find(departamento => departamento.id === empleado.departamento);
        if(!departamentoDB){
            reject(`el empleado no trabaja en ningun departamento`)
        }else{
            resolve({
                nombre:empleado.nombre,
                departamento: departamentoDB.nombre
            });
        }
    }); 
}
/*
    implementación sobre las promesas 
 */
getEmpleado(1).then(empleado =>{
   return getdepartamento(empleado);
}).then(resp =>{
    console.log(`${resp.nombre} trabaja en el departamento de   ${resp.departamento}`);
}).catch(err=> console.log(err))
