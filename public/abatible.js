

const deatpool = {
    nombre:'Chucho',
    apellido:'Kun',
    presentacion(){
        return `hola yo soy ${this.nombre} ${this.apellido}`;
    }
}

const {nombre,apellido, edad = 0} = deatpool

console.log(nombre,apellido, edad)


function imprime({nombre, apellido , edad = 10}){
    console.log(nombre,apellido,edad)
}

imprime(deatpool)


const chicas = ['carla','kristina','lucia'];
const [ h1 , h2 , h3 ] = chicas;

console.log(h1,h2,h3)
