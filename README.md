# @heppokofrontend/html-entity

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/@heppokofrontend/html-entity.svg)](https://www.npmjs.com/package/@heppokofrontend/html-entity) [![](https://data.jsdelivr.com/v1/package/npm/@heppokofrontend/html-entity/badge)](https://www.jsdelivr.com/package/npm/@heppokofrontend/html-entity) [![Maintainability](https://api.codeclimate.com/v1/badges/1dad8f583434d9231b36/maintainability)](https://codeclimate.com/github/heppokofrontend/html-entity/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/1dad8f583434d9231b36/test_coverage)](https://codeclimate.com/github/heppokofrontend/html-entity/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/npm/@heppokofrontend/html-entity/badge.svg)](https://snyk.io/test/npm/@heppokofrontend/html-entity)
 [![@heppokofrontend/html-entity](https://snyk.io/advisor/npm-package/@heppokofrontend/html-entity/badge.svg)](https://snyk.io/advisor/npm-package/@heppokofrontend/html-entity)


Encodes and decodes an HTML Entity.

## Usage

Installation:

```shell
npm install --save @heppokofrontend/html-entity
```

Example: 

```javascript
import { encodeHTMLEntities, decodeHTMLEntities } from '@heppokofrontend/html-entity';

const string = 'hello world';
const htmlEntity = encodeHTMLEntities(string); // => &#x68;&#x65;&#x6c;&#x6c;&#x6f;&#x20;&#x77;&#x6f;&#x72;&#x6c;&#x64;

console.log(decodeHTMLEntities(htmlEntity)); // > hello world
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
