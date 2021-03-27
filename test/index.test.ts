import { encodeHTMLEntities, decodeHTMLEntities } from '../src/index';

test('Basic usege', () => {
  expect(encodeHTMLEntities('hogehoge')).toBe('&#x68;&#x6f;&#x67;&#x65;&#x68;&#x6f;&#x67;&#x65;');
  expect(decodeHTMLEntities('&#x68;&#x6f;&#x67;&#x65;&#x68;&#x6f;&#x67;&#x65;')).toBe('hogehoge');
});

const testCases = [
  'こんにちは',
  '😇',
];

for (const base of testCases) {
  const entity = encodeHTMLEntities(base);

  test(base, () => {
    expect(encodeHTMLEntities(base)).toBe(entity);
    expect(decodeHTMLEntities(entity)).toBe(base);
  });
}
