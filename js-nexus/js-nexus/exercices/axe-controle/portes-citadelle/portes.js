// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 * @param {number} level 
 * @returns {string} Retourne le message d'accès correspondant au niveau
 */
export function accessMessage(level) {
  if(level >= 5){
    return "Accès autorisé";
  }
  else{
    return "Accès refusé";
  }
}

/**
 * Indiquer l'état d'une porte
 * @param {Boolean} isOpen 
 * @returns {string} Retourne l'état de la porte
 */
export function doorStatus(isOpen) {
  if(isOpen == true){
    return "Ouverte";
  }
  else{
    return "Fermée";
  }
}

/**
 * Retourne le nom de la zone correspondant à un code.
 * @param {*} code 
 * @returns Retourne le nom de la zone correspondant à un code.
 */
export function zoneName(code) {
  switch(code)
  {
    case code = "N":
      return "Les Fondations";
      break;
    
    case code = "E":
      return "Les Archives";
      break;
    
    case code = "SE":
      return "La Forge";
      break;

    case code = "SO":
      return "La Citadelle";
      break;

    case code = "O":
      return "La Faille";
      break;

    default:
      return "Zone inconnue";
      break;
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 * @param {number} energy 
 * @returns ça retourne le texte équivalent à son niveau.
 */
export function alertLevel(energy) {
  if(energy < 20) return "CRITIQUE";
  else if( energy >= 20 && energy <= 49) return "FAIBLE";
  else if( energy >= 50 && energy <= 79) return "STABLE";
  else if( energy >= 80 ) return "OPTIMAL";

}
