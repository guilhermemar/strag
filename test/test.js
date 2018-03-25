const jsdom  = require('jsdom');
const assert = require('assert');
const strag  = require('../source/strag.js')

// simulating a brouse
global.window = new jsdom.JSDOM('<!doctype html><html><body></body></html>').window;

describe('Testing a simple div created', function () {
  const te = strag(`<div id="test" class="test1 test2">test content</div>`);

  it('should have tagName DIV', function () {
    assert.equal(te.tagName, 'DIV');
  });

  it('should have id "test"', function () {
    assert.equal(te.id, 'test');
  });

  it('should have class "test1"', function () {
    assert.equal(te.classList.contains('test1'), true);
  });

  it('should have class "test2"', function () {
    assert.equal(te.classList.contains('test2'), true);
  });

  it('should have innerHTML "test content"', function () {
    assert.equal(te.innerHTML, 'test content')
  });
});
