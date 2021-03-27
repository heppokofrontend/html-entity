/**
 * Convert all applicable characters to HTML entities.
 * @param str - input string
 * @returns - Converted string
 */
export function encodeHTMLEntities(str: string) {
  const result = [];

  for (const word of str) {
    if (word.length) {
        result.push(`&#x${word.codePointAt(0)!.toString(16)};`);
    }
  }

  return result.join('');
}

/**
 * Convert HTML entities to their corresponding characters
 * @param str - The string to be converted
 * @returns - Converted string
 */
export const decodeHTMLEntities = (() => {
  const pattern = /&#(.*?);/g;
  const replacement = (_: string, p1: string) => String.fromCodePoint(parseInt(`0${p1}`, 16));

  return function decodeHTMLEntities(str: string) {
    return str.replace(pattern, replacement);
  };
})();
