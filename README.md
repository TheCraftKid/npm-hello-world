# thecraftkid-npm-hello-world
A "Hello world" Node module for NPM, built for [Google Code-In 2017](https://codein.withgoogle.com/dashboard/task-instances/6049832672165888/).

### Usage
This program prints "Hello world!" when called. To use, call the 
`printHelloWorld` function in the module.
Example:
```javascript
const out = require('thecraftkid-npm-hello-world');

out.printHelloWorld();
```

### Build
It's already built. Run `npm start` to see the program in action.

### Tests
There's only one test. Run `npm run test` test the module. It checks to make
sure the output for `printHelloWorld` equals "Hello world!"

