// Creación de objeto. 
const persona = {
                    nombre: 'Roberto',
                    apellido: 'Gallardo',
                    edad: 24,
                    direccion:  {
                                    ciudad: 'Veracruz',
                                    zip: 94100,
                                    lat: 14.0123456,
                                    lng: 10.1234567, // La coma al final es buena practica
                                },
                };

// Uso incorrecto para obtener las propiedades de un objeto.
const persona2 = persona; // Esto no copia las propiedades del objeto, sino lo referencía. 

// Uso correcto 

const persona2 = {...persona}; // Con esto si copiamos las propiedades del objeto además de poder modificar en memoria.

