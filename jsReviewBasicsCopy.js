// **Iteración #1: Mix for e includes**

//? Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories = [];
// bucle que nos saca cada película de la lista de películas
for (const movie of movies) {
    // bucle que nos saca cada categoría de nuestra lista de categorias de cada película
    for ( const categorie of movie.categories){
        // comprovamos si existe cada categoría, si no está la añadimos, si está no la añadimos
        !categories.includes(categorie) && categories.push(categorie);
        }
}
// comprobamos el resultado final
console.log("RESULTADO ITERACIÓN#1 : las categorías disponibles son :", categories);

// ifesle => condicion ? respuesta correcta : respuesta incorrecta
// if => condición && respuesta correcta


// **Iteración #2: Mix Fors**

//? Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

//forof + forin
//media de volumenes - están dentro de favoritesSounds que a su vez están dentro de cada usuario


// creamos variables para saber las vueltas del bucle y saber la suma de todos los volúmenes
let contador = 0;
let sumaVolumen = 0;

// iniciamos el bucle para leer los usuarios de 1 en 1
for ( const user of users ) {

    // creamos un FORIN para acceder a la clave de cada sonido y ponerla en SOUND
    for ( const sound in user.favoritesSounds) {

        // accedemos a los valores de VOLUMEN de favoritesSounds y lo guardamos en número utilizando "user.favoritesSounds[sound].volume"
        let numero = user.favoritesSounds[sound].volume;
        // incrementamos el contador en 1 cada vuelta para saber la cantidad de números que tenemos
        contador++;
        // sumamos el numero a sumaVolumen para guardarlo fuera del bucle
        sumaVolumen += numero;
    }
}
// mostramos por pantalla la operación de división para que nos enseñe la media
console.log("RESULTADO ITERACIÓN#2 : La media de todos los volúmenes es:",sumaVolumen/contador);