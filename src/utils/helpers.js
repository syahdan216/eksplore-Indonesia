/**
 * Utility helper functions for Explore Indonesia
 */

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} New shuffled array
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get random item from array
 * @param {Array} array
 * @returns {*} Random item
 */
export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get random items from array (no duplicates)
 * @param {Array} array
 * @param {number} count
 * @returns {Array}
 */
export function getRandomItems(array, count) {
  return shuffleArray(array).slice(0, count);
}

