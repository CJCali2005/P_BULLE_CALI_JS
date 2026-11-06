// @ts-check

/**
 * 
 * @param {string} value 
 * @returns 
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * 
 * @param {string} value1 
 * @param {number} value2 
 */
export function sameCodeLoose(value1, value2) {
  return Number(value1) == value2;
}

/**
 * 
 * @param {*} value1 
 * @param {*} value2 
 * @returns 
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2;
}

/**
 * 
 * @param {*} code 
 * @returns 
 */
export function isEvenCode(code) {
 let verfiModulo = code % 2;

  return verfiModulo == 0;
}

/**
 * 
 * @param {string} value 
 */
export function isInvalidCode(value) {
  if (isNaN(Number(value))) return true;
  else return false;
}
