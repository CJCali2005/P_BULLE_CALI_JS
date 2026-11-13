// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 * @param {*} value 
 * @returns retourne le type de value.
 */
export function dataType(value) {
  return typeof (value);
}

/**
 * Indique si le comptage vaut undefined.
 * @param {*} count 
 * @returns retourne true si undefined.
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 * @param {*} count 
 * @returns retourne true si null (strictement).
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 * @param {*} count 
 * @returns retourne true si pas undefined et pas null.
 */
export function hasBirdCount(count) {
  return count != null && count != undefined;
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 * @param {*} northCount 
 * @param {*} southCount 
 * @returns retourne la somme de northcount et southcount.
 */
export function totalBirds(northCount, southCount) {
  if (northCount == undefined) northCount = 0;
  if (southCount == undefined) southCount = 0;
  if (northCount == null) northCount = 0;
  if (southCount == null) southCount = 0;
  return northCount + southCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 * @param {*} height 
 * @returns retourne si la valeur est un number
 */
export function isValidWaveHeight(height) {
  if (isNaN(height) || typeof (height) != "number") {
    return false;
  }
  else{
    return true;
  }
}
