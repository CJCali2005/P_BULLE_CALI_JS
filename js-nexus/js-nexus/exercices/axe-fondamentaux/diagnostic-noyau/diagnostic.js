// @ts-check

/**
 * 
 * @param {*} value 
 * @returns 
 */
export function valueType(value) {
  return typeof(value);
}

/**
 * 
 * @param {*} value 
 * @returns 
 */
export function isUndefined(value) {

  return value === undefined;
}

/**
 * 
 * @param {*} value 
 */
export function isNull(value) {
  return value === null;
}

/**
 * 
 * @param {*} value 
 * @returns 
 */
export function hasKnownValue(value) {
  
  return value !== null && value !== undefined;
}

/**
 * 
 * @param {*} energy 
 * @param {*} minimumEnergy 
 * @returns 
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) - Number(minimumEnergy) >= 0;
}

/**
 * 
 * @param {*} zone 
 * @param {*} expectedZone 
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
