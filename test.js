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

users.forEach(element => console.log(element.favoritesSounds.waves));



// // WAVES
// let favoritesSounds = [];
// for (const item of users){
//         favoritesSounds.push(item.favoritesSounds.waves);
// }

// let volumes = [];
// for (const item of favoritesSounds){
//     for (const key in item){
//             volumes.push(item[key]);        
//     // console.log(item[key]);
//     }

// }
// // console.log(volumes[1]);

// let numVolume = [];
// for (let i = 0; i < volumes.length; i++){
//     if(!isNaN(volumes[i])){
//         numVolume.push(volumes[i]);
//     }
// }

// let result = numVolume.map(function (x) { 
//   return parseInt(x, 10); 
// });

// // console.log(result);

// let sumaVolumen = 0;

// for (let n = 0; n < result.length; n++){
//     // console.log(result[n]);
//     // volumenNum = result[n];
//     // console.log(isNaN(result[n]));
//     // sumaVolumen += volumenNum;
//     sumaVolumen = sumaVolumen + result[n];
// }

// let mediaVolumen = sumaVolumen/(numVolume.length);

// console.log("La media de volumenes de WAVES es:", mediaVolumen);