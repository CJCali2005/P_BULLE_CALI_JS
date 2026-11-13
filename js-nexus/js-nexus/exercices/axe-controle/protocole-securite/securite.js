// @ts-check

/**
 * Valide une quantité d'énergie.
 * @param {*} energy 
 * @returns 
 */
export function validateEnergy(energy) {
  if(energy < 0) throw new Error("Énergie invalide");
  else return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
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
 */
export function validateGateCode(code) {
  let result = "";

  try{

    switch(code){
      case "ALPHA": 
      case "BETA": 
      case "OMEGA":
        result = code;
        break;

      default:
         throw new Error("Code inconnu");
         break;
    }
  }
  catch(error){
    return "Code inconnu";
  }

  return result;
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
export function safeGateCheck(code) {
  // TODO
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
export function countValidAttempts(text) {
  // TODO
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
export function attemptsBeforeLock(sequence) {
  // TODO
}
