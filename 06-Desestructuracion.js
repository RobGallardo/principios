// Desestruracción o Asignación desestructurante
const persona = {
                    nombre: 'Roberto',
                    edad: 24,
                    clave: 'Gallardo',
                }

// const {nombre:nombre2} = persona;

// console.log (nombre2);

const {nombre, edad, clave} = persona;

console.log (nombre);
console.log (edad);
console.log (persona);

// const retornaPersona = (usuario) => {
//     const {nombre, edad, clave} = persona;
//     console.log (nombre,edad,clave)
// }

// Uso adecuado 
const useContext = ({ nombre, edad, rango = 'Dios' }) => {
    //console.log( nombre, edad, rango )
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 10.1234567,
            lng: 11.123456,
        }
    }
}

// const avenger = retornaPersona ( persona )

// const { nombreClave, anios, latlng} =  useContext(persona)

//Extraer objetos anidados.
// Se trae latitud y longitud de las respectivas constantes.
const { nombreClave, anios, latlng:{lat,lng}} =  useContext(persona)

// Lo más común sería desestructurar el objeto laglng
const {lat, lng} = latlng;
console.log(nombreClave,anios);
console.log (lat,lng)

