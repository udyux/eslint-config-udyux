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

### Plugins

This config makes use of the following plugins:

- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value)
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)

### Extended configs

This config extends the following configs:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)

---

Licensed under [MIT](LICENSE)
