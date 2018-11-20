# eslint-config-udyux

> An opinionated and portable [eslint](https://eslint.org/) config.

## Installation

```bash
$ npm install -D eslint-config-udyux
# or
$ yarn add -D eslint-config-udyux
```

## Usage

Add `udyux` to the `extends` array in your `.eslintrc.*` file.

```javascript
{
  extends: [
    // ...
    "udyux"
  ]
}
```

_Don't forget that extended configs are merged in order, so the last entry takes precedence over the others in case of rule conflicts._

## Documentation

### Extended configs

This config extends the following configs:

- [eslint:recommended](https://eslint.org/docs/rules/)
- [standard](https://github.com/standard/eslint-config-standard)
- [esnext/style-guide](https://www.npmjs.com/package/eslint-config-esnext)

---

Licensed under [MIT](LICENSE)
