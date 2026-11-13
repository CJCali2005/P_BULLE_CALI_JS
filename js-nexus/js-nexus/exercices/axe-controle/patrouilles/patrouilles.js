// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 * @param {number} numberOfRounds 
 * @returns {number} retourne la somme des rondes.
 */
export function sumRounds(numberOfRounds) {
  let x = 0;
  for (let i = 0; i <= numberOfRounds; i++) {
    x += i;
  }

  return x;
}

/**
 * Compte le nombre de caractères d'un code.
 * @param {string} code 
 * @returns {number} retourne le nombre de caractères.
 */
export function countSymbols(code) {
  let x = 0;
  for (let i = 0; i <= code.length - 1; i++) {
    x += 1;
  }

  return x;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 * @param {string} code 
 * @returns {number} retourne le nombre de 'X' dans code.
 */
export function countX(code) {
  let x = 0;
  for (let i = 0; i <= code.length - 1; i++) {
    if(code[i] == "X" || code[i] == "x") x++; 
  }
  return x;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 * @param {number} energy 
 * @param {number} consumption 
 * @returns {number} retourne le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
  let x = 0;
  for(let i = energy ; i >= consumption  ; i = i - consumption ){
    
    x = x + 1 ;

    if (i - consumption < 0 ) break;

  }

  return x;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 * @param {number} limit 
 * @returns {number} Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  let x = 1;
  let y = 1;
  
  while(x <= limit ){
    x += y;
    y++ 
  }
  return y ;
}
