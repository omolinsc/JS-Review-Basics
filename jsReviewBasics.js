console.log("");
console.log("ITERATION#1 ----------------------");

// **Iteración #1: Mix for e includes**

//? Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories = [];
for (const item of movies) {
    categories.push(item.categories);
}

catString = categories.toString();

// console.log(categories);
// console.log(catString);
const catArray = catString.split(",");
// console.log(catArray);

// for (const item of catArray) {
//     console.log(item)
// }

const unicos = [];

for(var i = 0; i < catArray.length; i++) {
 
  const elemento = catArray[i];
 
  if (!unicos.includes(catArray[i])) {
    unicos.push(elemento);
  }
}

console.log(unicos);


// **Iteración #2: Mix Fors**

//? Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

console.log("");
console.log("ITERATION#2 ----------------------");

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



// **Iteración #3: Mix Fors**

// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

// (lo que pide el ejercicio es que contemos cuantas veces se repite un sonido favorito, por ejemplo, waves lo han agregado 3 usuarios, por lo tanto queremos que el código nos diga que waves se repite 3 veces) 

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.

console.log("");
console.log("ITERATION#3 ----------------------");

const users2 = [
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

const repeat = [];
for (const user of users2){
    // console.log(user);
    for (const sounds in user.favoritesSounds){
        // console.log(sounds);
        repeat.push(sounds);
        }        
    }

const counts = {};
repeat.forEach(function (x) { 
    counts[x] = (counts[x] || 0) + 1; });
console.log(counts);




// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:

console.log("");
console.log("ITERATION#4 ----------------------");

const arrayPalabras = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if (text === array[i]){
            return text + " está en la posición " + (i+1);
        }
    }
    return text + " no se encuentra en el array.";
}

console.log(findArrayIndex(arrayPalabras,"Mosquito"));