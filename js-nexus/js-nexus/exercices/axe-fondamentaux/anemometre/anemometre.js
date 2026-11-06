// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s

/**
 * 
 * @param {number} speedKmh 
 * @returns 
 */
export function kmhToMs(speedKmh) {
  return speedKmh / 3.6;
}

/**
 * 
 * @param {number} gustKmh 
 * @param number} averageKmh 
 * @returns 
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * 
 * @param {*} speed1 
 * @param {*} speed2 
 * @param {*} speed3 
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * 
 * @param {number} speedKmh 
 * @returns 
 */
export function isStormAlert(speedKmh) {
  return speedKmh >= 75;
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  
  return station + " : vent de " + speedKmh + " km/h (" + speedKmh / 3.6 + " m/s)."
}
