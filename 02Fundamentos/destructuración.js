/*class persona{
    nombre = 'Carlos';
    apellido = '';
    fecha = undefined;
    init(nombre="", apellido="", fecha=undefined){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
    }
    getNombre(){
        return this.nombre
    }
}
*/
let Empleado = {
    nombre :'Jose',
    apellido: 'Gonzales',
    salario : 20000.0,
    getInformacion: function(){
        return `${this.nombre} ${this.apellido}- salario ${this.salario} `;
    }
}
//Acceder a los valores del objetos
/*
let nombre = Empleado.nombre;
let apellido = Empleado.apellido;
let salario = Empleado.salario;
*/
// se puede hacer mediante destructuraración 
let {nombre, apellido, salario} = Empleado;

console.log(nombre, apellido, salario);