# Garden React Components [![npm version][npm version badge]][npm link] [![Build Status][build status badge]][build status link] [![Coverage Status][coverage status badge]][coverage status link]<!-- markdownlint-disable -->

<!-- markdownlint-enable -->

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-components/next
[npm link]: https://www.npmjs.com/package/@zendeskgarden/react-components
[build status badge]: https://img.shields.io/github/actions/workflow/status/zendeskgarden/react-components/ci.yaml?branch=main&style=flat-square
[build status link]: https://github.com/zendeskgarden/react-components/actions/workflows/ci.yaml?query=branch%3Amain
[coverage status badge]: https://flat.badgen.net/coveralls/c/github/zendeskgarden/react-components/main
[coverage status link]: https://coveralls.io/github/zendeskgarden/react-components

> :seedling: Garden is the design system by Zendesk

Garden React provides consistent styling and behavior for Garden components.
Version 10 ships every component in one package,
`@zendeskgarden/react-components`.

> **Release candidate:** v10 is in development and the API can still change
> before 10.0.0. Looking for v9? The `@zendeskgarden/react-*` packages are still
> the stable release. See the
> [v9 source](https://github.com/zendeskgarden/react-components/tree/v9).
> Upgrading to v10? Read the [migration guide](docs/migration.md).

## Installation

```sh
npm install @zendeskgarden/react-components@next styled-components
```

The package has these peer dependencies:

- `react` and `react-dom`: `^16.13.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`
- `styled-components`: `^6.0.8`

## Usage

Here is a simple example to get you started:

```jsx
import { Button, ThemeProvider } from '@zendeskgarden/react-components';
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  /* Include a ThemeProvider wrapper at the root of your app */
  <ThemeProvider>
    <Button>Example Garden button</Button>
  </ThemeProvider>
);

createRoot(document.getElementById('root')).render(<App />);
```

React 16 and 17 do not include `createRoot`. Use `ReactDOM.render` instead.

## Documentation

See Garden's [documentation website](https://garden.zendesk.com/) or click
the links below to learn more.

- [Versioning](docs/versioning.md) policy
- Major release [migration](docs/migration.md) instructions (v9 to v10)
- Component [API](docs/api.md)
- [Development](docs/development.md) guidelines
- Architectural [decision](docs/adrs/#readme) records

## Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](https://github.com/zendeskgarden/react-components/issues/new).

If you'd like to take a crack at making some changes, please follow our
[contributing](.github/CONTRIBUTING.md) documentation for details
needed to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## License

Copyright 2026 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
