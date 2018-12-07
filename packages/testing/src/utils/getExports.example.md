Signature:

- `getExports({ globPath: string, cwd: string, fileMapper: function })`

```jsx static
import { getExports } from '@zendeskgarden/react-testing';
import * as rootIndex from './';

describe('Index', () => {
  it('exports all components and utilities', async () => {
    const exports = await getExports({ cwd: __dirname });

    expect(Object.keys(rootIndex).sort()).toEqual(exports);
  });
});
```
