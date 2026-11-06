// @ts-check

/**
 * 
 * @param {number} maxEnergy 
 * @param {number} currentEnergy 
 * @returns {number} quantité d'énergie nécessaire pour remplir complètement le générateur.
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  
  return maxEnergy - currentEnergy;
}

/**
 * 
 * @param {number} maxEnergy 
 * @param {Number} currentEnergy 
 * @returns {number} retourne le pourcentage d'énergie disponible.
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return currentEnergy / (maxEnergy / 100) ;
}

/**
 * 
 * @param {number} currentEnergy 
 * @param {number} recharge 
 * @returns retourne energy après charges
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * 
 * @param {number} currentEnergy 
 * @returns {boolean} retourne true s'il possède au moins 500 unités d'énergie.
 */
export function isGeneratorReady(currentEnergy) {
  return currentEnergy >= 500 ;
}

/**
 * 
 * @param {string} name 
 * @param {number} currentEnergy 
 * @returns {string}
 */
export function generatorStatus(name, currentEnergy) {
  
  return `${name} possède ${currentEnergy} unités d'énergie.`
}
