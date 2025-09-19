/*let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let d = 0; d < noun.length; d++) {
      console.log(pronoun[a] + adj[b] + noun[d] + '.com');
      
    }
  }
}*/

const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];

for (const pronoun of pronouns) {
  for (const adjective of adjectives) 
    {
    for (const noun of nouns) {
      const domains = `${pronoun}${adjective}${noun}.com`;
      console.log(domains);
    }
  }
}