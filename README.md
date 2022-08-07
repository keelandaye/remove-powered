# remove-powered

This package provides middleware for Express.js to remove the X-Powered-By header. By default, Express sets the X-Powered-By header to "Express". This can potentially be exploited, though using this middleware does not entirely obscure the use of Express.

## Installation

```bash
npm install keels/remove-powered --save
```

## Usage

Use this package as Express middleware.

```
const rp = require('keels/remove-powered');

app.use(rp.removePowered);
```

## Development

This project uses [ESLint](https://eslint.org) and [EditorConfig](https://editorconfig.org) to standardise code styles.

This project uses [Jest](https://jestjs.io) and [SuperTest](https://github.com/visionmedia/supertest) for tests. To run tests, execute:

```bash
npm test
```