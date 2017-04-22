import expect from 'test/expect';
import * as rootIndex from './';

describe('index', () => {
  it('All modules should be correctly exported in the root index', () => {
    Object.keys(rootIndex).forEach(name => {
      const module = require(`./${name}`).default;
      expect(module, 'to be', rootIndex[name]);
      expect(typeof module, 'to match', /^(function|object)$/);
    });
  });
});
