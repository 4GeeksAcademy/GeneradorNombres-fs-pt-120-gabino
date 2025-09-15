let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// for (let a = 0; a < pronoun.length; a++) {
//   for (let b = 0; b < adj.length; b++) {
//     for (let d = 0; d < noun.length; d++) {
//       console.log(pronoun[a] + adj[b] + noun[d] + '.com');

//     }
//   }
// }


// Cambie a 'for of' para recorrer directamente los valores de cada array
//Nombre las variables de una forma mas legible 
for (let pronombre of pronoun) {
  for (let adjetivo of adj) {
    for (let sustantivo of noun) {
      console.log(`${pronombre} ${adjetivo} ${sustantivo}.com`)
    }
  }
}