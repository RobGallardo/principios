// Es posible crear el arreglo de esta forma pero no es muy común
const arreglo = new Array( 100 );
arreglo.push(1) // No es necesario utilizar el push.

const arreglo = [1,2,3,4];

// De igual forma no usar ya que es referencia.
// let arreglo2 = arreglo;
// arreglo2.push (5);

let arreglo2 = [...arreglo,5];
// console.log (arreglo)

// Callback
const arreglo3 = arreglo2.map( function (numero) {
    return numero * 2;
});

console.log ( arreglo );
console.log ( arreglo2 );
console.log ( arreglo3 );