let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];


/**
 * 
 * @param {*} pronouns Array que incluye pronombres
 * @param {*} adjetives Array que incluye adjetivos
 * @param {*} nouns Array que incluye nombres 
 * @returns Una variable con todas las posibilidades de nombres de dominio con los parametros dados.
 */
const domainGenerator=(pronouns, adjetives, nouns)=>{

let nombresDominio=""

for (let pronoun of pronouns)
  for (let adj of adjetives)
    for (let noun of nouns){
      noun= `${noun.slice(0,-2)}.${noun.slice(-2)}`
      nombresDominio+= `${pronoun}${adj}${noun}\n`}

return nombresDominio

    }

console.log(domainGenerator(pronouns, adjs, nouns))