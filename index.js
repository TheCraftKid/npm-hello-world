'use strict';

function printHelloWorld() {
  console.log('Hello world!');
}

module.exports = {
  printHelloWorld,
};

if (require.main === module) {
  printHelloWorld();
}
