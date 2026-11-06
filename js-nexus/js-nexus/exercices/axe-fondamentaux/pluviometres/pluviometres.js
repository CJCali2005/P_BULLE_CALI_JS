// @ts-check

/**
 * Convertit un relevé en nombre.
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
 * @returns 
 */
export function isScheduledHour(hour) {
  let x = hour % 3;

  return hour == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
export function isFaultyReading(value) {
  // TODO
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
export function isConfirmedReading(manual, automatic) {
  // TODO
}
