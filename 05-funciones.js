// Funciones JS 

// No es recomendable crear una función de esta forma 

function saludar ( nombre ) {
        return `Hola, ${ nombre }`;
}

saludar = 1 

console.log (saludar); // Se quedaría con el valor de 1.

// Manera de si hacer una función con constante
const saludar = function (nombre) {
    return `Hola, ${ nombre }`;
}

// Funciones de flecha

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

console.log (saludar2('Roberto'));

// Con un return y recibe argunemto.
const saludar3 = (nombre) =>  `Hola, ${ nombre }`;

console.log (saludar3('Roberto'));
// No recibe argumento 
const saludar4 = () =>  `Hola, 'Roberto'`;

console.log (saludar4());

// Función flecha con paréntesis, funciona como return para identificar el cuerpo.
const getUser = () => ({
    uid:        '0x00123456789',
    username:   'rgallardo',
})

const user = getUser();
console.log(user);

// function getUsuarioActivo ( nombre ) {
//     return {
//         uid:        '0x00123456789',
//         username:   'rgallardo' 
//     }
// }

const usuarioActivo = (nombre) => ({
    uid:        '0x00123456789',
    username:   'rgallardo',
})

const usuarioActivo = getUsuarioActivo('Gallardo')
