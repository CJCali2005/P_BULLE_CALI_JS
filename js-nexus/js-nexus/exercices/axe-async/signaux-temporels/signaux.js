// @ts-check

/**
 * Exécute un callback après un délai.
 * @param {*} callback 
 * @param {*} delay 
 */
export function runLater(callback, delay) {
  setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 * @param {*} message 
 * @param {*} delay 
 * @param {*} callback 
 */
export function sendSignal(message, delay, callback) {

  setTimeout(() => callback(message), delay);

}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 * @param {*} value 
 * @param {*} delay 
 * @param {*} callback 
 */
export function doubleLater(value, delay, callback) {

  setTimeout(() => callback(value * 2), delay);

}

/**
 * Construit un statut puis le transmet après un délai.
 * @param {*} name 
 * @param {*} delay 
 * @param {*} callback 
 */
export function delayedStatus(name, delay, callback) {
  
  setTimeout(() => callback(`${name} prêt`), delay);

}
