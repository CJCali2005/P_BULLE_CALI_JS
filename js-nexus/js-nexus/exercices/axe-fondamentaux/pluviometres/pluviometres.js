// @ts-check

/**
 * Convertit un relevé en nombre.
 * @param {*} value
 * @returns {number} retourne la version number de value
 */
export function readRainfall(value) {
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 * @param {*} morning 
 * @param {*} evening 
 * @returns retourne la somme des relevés de la journée
 */
export function totalRainfall(morning, evening) {
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 * @param {number} hour 
 * @returns {boolean} retourne un booléen qui confirme si c'est un multiple de 3.
 */
export function isScheduledHour(hour) {
  let x = hour % 3;

  return x == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 * @param {*} value 
 * @returns {boolean} retourne un booléen qui comfirme que number soit identique.
 */
export function isFaultyReading(value) {
  return value != Number(value);
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 * @param {*} manual 
 * @param {*} automatic 
 * @returns {boolean} confirme que le relevé automatique sois strictement identique au manuel.
 */
export function isConfirmedReading(manual, automatic) {
  return Number(manual) === Number(automatic);
}
