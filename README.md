# rut 
[![](https://img.shields.io/npm/v/@dgitals/rut.svg)](https://www.npmjs.com/package/@dgitals/rut) [![](https://img.shields.io/badge/coverage-100%25-green.svg)](https://github.com/dgitals/rut/blob/master/__tests__/index.test.js) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)




🇨🇱 Just another toolkit library for validating/formatting RUTs

Don't know what a RUT is? [read this](https://transferwise.com/us/blog/rut-run-meaning-chile).

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm i @dgitals/rut


Using [yarn](https://yarnpkg.com/):

    $ yarn add @dgitals/rut


### Usage: Cleaning a RUT

```js
...
import { clean } from '@dgitals/rut'
...

clean('18.722.577-9')   // returns 187225779
clean('0187225779')     // returns 187225779
clean('7.903.486-k')    // returns 7903486K

```

### Usage: Validating a RUT

```js
...
import { validate } from '@dgitals/rut'
...

validate('18.722.577-9')          // returns true
validate('7903486k')              // returns true
validate('nope18.722.577-9')      // returns false
validate(187225779)               // returns false (RUT is ok, but needs to be a String)

```

### Usage: Formatting a RUT

```js
...
import { format } from '@dgitals/rut'
...

format('7903486-k')      // returns 7.903.486-k
format('18*722*577*9')   // returns 18.722.577-9
format('187225779')      // returns 18.722.577-9

```

> Note: all methods above MUST receive a String parameter as RUT


### Testing

```js
$ yarn install
$ yarn test
```
### Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/dgitals/rut/issues).

### Credits

@dgitals/rut  is built and maintained by [Dgitals, Inc](https://github.com/dgitals).
