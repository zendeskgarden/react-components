import expect from 'test/expect';
import * as rootIndex from './';
import fs from 'fs';

describe('index', () => {
  const rootIndexExports = Object.keys(rootIndex);

  it('All components are listed in the root index', () => {
    fs
      .readdirSync(__dirname)
      .filter(dir => /^[A-Z]/.test(dir))
      .map(entry => entry.replace(/\.js$/, ''))
      .forEach(dir => expect(rootIndexExports, 'to contain', dir));
  });

  it('All modules should be correctly exported in the root index', () => {
    rootIndexExports.forEach(name => {
      const module = require(`./${name}`).default;
      expect(module, 'to be', rootIndex[name]);
      expect(typeof module, 'to match', /^(function|object)$/);
    });
  });
});
