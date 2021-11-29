// Desestructuación de Arreglos
const personajes = ['GALLARDO','GALLARDO2','GALLARDO3']
// console.log( personajes [0]);
// console.log( personajes [1]);
// console.log( personajes [2]);

// La coma es para obtener el valor en x posición. f2 = cambiar referencia.
const [ , , p3 ] = personajes;

console.log ( p3 ); 


const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const useState = ( valor ) => {
    return [ valor , ()=> {console.log('Hola Mundo')}]
}

const arr = useState ( 'Goku' );
console.log(arr)

// Se destructura y la función pasa a llamarse setnombre
const [nombre,setNombre] =  useState ( 'Goku' );
arr[1]();
setNombre();