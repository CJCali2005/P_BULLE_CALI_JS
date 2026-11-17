// @ts-check

/**
 * Valide une quantité d'énergie.
 * @param {number} energy 
 * @returns {*} retourne sois un string d'erreur soit l'energie.
 */
export function validateEnergy(energy) {
  if(energy < 0) throw new Error("Énergie invalide");
  else return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 * @param {*} energy 
 * @returns {string} retourne l'état de si l'énnergie est valide.
 */
export function safeEnergyCheck(energy) {
  try{
    validateEnergy(energy);
    return "Énergie valide";
  }
  catch(error){
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 * @param {*} code 
 * @returns {string} retourne le code ou code inconnu si refusé.
 */
export function validateGateCode(code) {

    switch(code){
      case "ALPHA": 
      case "BETA": 
      case "OMEGA":
        return code;
      default:
         throw new Error("Code inconnu");
    }
  
}

/**
 * Vérifie un code de porte sans propager l'exception.
 * @param {string} code 
 * @returns {string} retourne le status de si c'est accepté ou pas.
 */
export function safeGateCheck(code) {
  try{
    validateGateCode(code)

     return "Code accepté" ;
  }
  catch(error){
    return "Code refusé" ;
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 * @param {string} text 
 * @returns {number} retourne le nb de caractères valide dans lee code.
 */
export function countValidAttempts(text) {
  let x = 0;
  for (const char of text){
    if(char == "A" || char == "B"){
      x++
    } 
  }
  return x;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 * @param {string} sequence 
 * @returns {number}retourne le nb de tentatives avant blocage.
 */
export function attemptsBeforeLock(sequence) {
  let x = 0;
  let y = 0;

  for (const element of sequence){
    if( element == "X") x++;

    y++

    if( x == 3) break;

    
  }

  return y ;
}
