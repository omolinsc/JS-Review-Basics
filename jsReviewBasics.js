// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**


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