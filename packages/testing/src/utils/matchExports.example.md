Signature:

- `matchExports({ globPath: string, cwd: string, keys: Array<string>, fileMapper: function })`

```jsx static
import matchExports from './utils/matchExports';
import * as rootIndex from './';

describe('Index', () => {
  it('exports all components and utilities', () => {
    return matchExports({ cwd: __dirname, keys: Object.keys(rootIndex).sort() });
  });
});
```
