const nombre = 'Roberto';
const apellido = 'Gallardo';

// Contatenación con Template String. Se respetan saltos de Línea y se pueden agregar funciones.

const nombreCompleto =  `
                        ${ nombre }
                        ${ apellido}
                        `

function getSaludo(nombre) {
    return ` Hola ${nombre} ` 
}

console.log(getSaludo(nombre)); 
