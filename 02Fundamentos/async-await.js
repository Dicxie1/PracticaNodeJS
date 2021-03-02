/**
 * Asyns y Await
 */

let getNombre = async ()=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve('Dicxie')
        }, 4000)
    });
};
let saludo =  async ()=> {
    let nombre =  await getNombre(); 
    return `Hola ${nombre}`
}
saludo().then(menaje => {
    console.log(menaje)
})
