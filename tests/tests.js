'use strict';

const assert = require('assert');
const sinon = require('sinon');
const index = require('../index.js');

describe('printHelloWorld function test', () => {
  it('should print Hello world!', () => {
    const spy = sinon.spy(console, 'log');
    index.printHelloWorld();
    assert(spy.calledWith('Hello world!'));
    spy.restore();
  });
});