"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTMLEntities = exports.encodeHTMLEntities = void 0;
/**
 * Convert all applicable characters to HTML entities.
 * @param str - input string
 * @returns - Converted string
 */
function encodeHTMLEntities(str) {
    const result = [];
    for (const word of str) {
        if (word.length) {
            result.push(`&#x${word.codePointAt(0).toString(16)};`);
        }
    }
    return result.join('');
}
exports.encodeHTMLEntities = encodeHTMLEntities;
/**
 * Convert HTML entities to their corresponding characters
 * @param str - The string to be converted
 * @returns - Converted string
 */
exports.decodeHTMLEntities = (() => {
    const pattern = /&#(.*?);/g;
    const replacement = (_, p1) => String.fromCodePoint(parseInt(`0${p1}`, 16));
    return function decodeHTMLEntities(str) {
        return str.replace(pattern, replacement);
    };
})();
