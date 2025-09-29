
/* Codigo anterior */
/*
for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let d = 0; d < noun.length; d++) {
      console.log(pronoun[a] + adj[b] + noun[d] + '.com');
    }
  }
} */

// Declaración de arrays.
let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

// Array donde guardaremos los nombres generados.
 let nameGenerator = [];

pronouns.forEach(pronoun => {
  adjs.forEach(adj => {
    nouns.forEach(noun => {
      nameGenerator += pronoun + adj + noun + '.com' ;
    });
  });
});

console.log(nameGenerator);

  /*
    - Utilizamos forEach para anidar los arrays.
    - Los nombres de las variables dentro de cada forEach son mas legibles.
    - 
  */