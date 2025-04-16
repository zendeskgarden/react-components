# Garden React Components [![Build Status][build status badge]][build status link] [![Coverage Status][coverage status badge]][coverage status link]<!-- markdownlint-disable -->

<!-- markdownlint-enable -->

[build status badge]: https://img.shields.io/github/actions/workflow/status/zendeskgarden/react-components/ci.yaml?branch=main&style=flat-square
[build status link]: https://github.com/zendeskgarden/react-components/actions/workflows/ci.yaml?query=branch%3Amain
[coverage status badge]: https://flat.badgen.net/coveralls/c/github/zendeskgarden/react-components/main
[coverage status link]: https://coveralls.io/github/zendeskgarden/react-components

> :seedling: Garden is the design system by Zendesk

Garden React provides consistent styling and behavior for Garden components.
React components are maintained following a multi-package approach where
components are packaged and published individually, but combined under this
single repository.

## Installation

See the individual package README for the React component you would like
to install.

| Package                                                              | Version                                                                   | Size                                                                       |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`@zendeskgarden/react-accordions`](packages/accordions)             | [![npm version][accordions npm version]][accordions npm link]             | [![Bundle Size][accordions size bundle]][accordions size link]             |
| [`@zendeskgarden/react-avatars`](packages/avatars)                   | [![npm version][avatars npm version]][avatars npm link]                   | [![Bundle Size][avatars size bundle]][avatars size link]                   |
| [`@zendeskgarden/react-breadcrumbs`](packages/breadcrumbs)           | [![npm version][breadcrumbs npm version]][breadcrumbs npm link]           | [![Bundle Size][breadcrumbs size bundle]][breadcrumbs size link]           |
| [`@zendeskgarden/react-buttons`](packages/buttons)                   | [![npm version][buttons npm version]][buttons npm link]                   | [![Bundle Size][buttons size bundle]][buttons size link]                   |
| [`@zendeskgarden/react-chrome`](packages/chrome)                     | [![npm version][chrome npm version]][chrome npm link]                     | [![Bundle Size][chrome size bundle]][chrome size link]                     |
| [`@zendeskgarden/react-colorpickers`](packages/colorpickers)         | [![npm version][colorpickers npm version]][colorpickers npm link]         | [![Bundle Size][colorpickers size bundle]][colorpickers size link]         |
| [`@zendeskgarden/react-datepickers`](packages/datepickers)           | [![npm version][datepickers npm version]][datepickers npm link]           | [![Bundle Size][datepickers size bundle]][datepickers size link]           |
| [`@zendeskgarden/react-draggable`](packages/draggable)               | [![npm version][draggable npm version]][draggable npm link]               | [![Bundle Size][draggable size bundle]][draggable size link]               |
| [`@zendeskgarden/react-dropdowns.legacy`](packages/dropdowns.legacy) | [![npm version][dropdowns.legacy npm version]][dropdowns.legacy npm link] | [![Bundle Size][dropdowns.legacy size bundle]][dropdowns.legacy size link] |
| [`@zendeskgarden/react-dropdowns`](packages/dropdowns)               | [![npm version][dropdowns npm version]][dropdowns npm link]               | [![Bundle Size][dropdowns size bundle]][dropdowns size link]               |
| [`@zendeskgarden/react-forms`](packages/forms)                       | [![npm version][forms npm version]][forms npm link]                       | [![Bundle Size][forms size bundle]][forms size link]                       |
| [`@zendeskgarden/react-grid`](packages/grid)                         | [![npm version][grid npm version]][grid npm link]                         | [![Bundle Size][grid size bundle]][grid size link]                         |
| [`@zendeskgarden/react-loaders`](packages/loaders)                   | [![npm version][loaders npm version]][loaders npm link]                   | [![Bundle Size][loaders size bundle]][loaders size link]                   |
| [`@zendeskgarden/react-modals`](packages/modals)                     | [![npm version][modals npm version]][modals npm link]                     | [![Bundle Size][modals size bundle]][modals size link]                     |
| [`@zendeskgarden/react-notifications`](packages/notifications)       | [![npm version][notifications npm version]][notifications npm link]       | [![Bundle Size][notifications size bundle]][notifications size link]       |
| [`@zendeskgarden/react-pagination`](packages/pagination)             | [![npm version][pagination npm version]][pagination npm link]             | [![Bundle Size][pagination size bundle]][pagination size link]             |
| [`@zendeskgarden/react-tabs`](packages/tabs)                         | [![npm version][tabs npm version]][tabs npm link]                         | [![Bundle Size][tabs size bundle]][tabs size link]                         |
| [`@zendeskgarden/react-tables`](packages/tables)                     | [![npm version][tables npm version]][tables npm link]                     | [![Bundle Size][tables size bundle]][tables size link]                     |
| [`@zendeskgarden/react-tags`](packages/tags)                         | [![npm version][tags npm version]][tags npm link]                         | [![Bundle Size][tags size bundle]][tags size link]                         |
| [`@zendeskgarden/react-theming`](packages/theming)                   | [![npm version][theming npm version]][theming npm link]                   | [![Bundle Size][theming size bundle]][theming size link]                   |
| [`@zendeskgarden/react-tooltips`](packages/tooltips)                 | [![npm version][tooltips npm version]][tooltips npm link]                 | [![Bundle Size][tooltips size bundle]][tooltips size link]                 |
| [`@zendeskgarden/react-typography`](packages/typography)             | [![npm version][typography npm version]][typography npm link]             | [![Bundle Size][typography size bundle]][typography size link]             |

[accordions npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-accordions
[accordions npm link]: https://www.npmjs.com/package/@zendeskgarden/react-accordions
[accordions size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-accordions
[accordions size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-accordions
[avatars npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-avatars
[avatars npm link]: https://www.npmjs.com/package/@zendeskgarden/react-avatars
[avatars size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-avatars
[avatars size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-avatars
[breadcrumbs npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-breadcrumbs
[breadcrumbs npm link]: https://www.npmjs.com/package/@zendeskgarden/react-breadcrumbs
[breadcrumbs size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-breadcrumbs
[breadcrumbs size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-breadcrumbs
[buttons npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-buttons
[buttons npm link]: https://www.npmjs.com/package/@zendeskgarden/react-buttons
[buttons size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-buttons
[buttons size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-buttons
[chrome npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-chrome
[chrome npm link]: https://www.npmjs.com/package/@zendeskgarden/react-chrome
[chrome size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-chrome
[chrome size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-chrome
[colorpickers npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-colorpickers
[colorpickers npm link]: https://www.npmjs.com/package/@zendeskgarden/react-colorpickers
[colorpickers size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-colorpickers
[colorpickers size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-colorpickers
[datepickers npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-datepickers
[datepickers npm link]: https://www.npmjs.com/package/@zendeskgarden/react-datepickers
[datepickers size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-datepickers
[datepickers size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-datepickers
[draggable npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-draggable
[draggable npm link]: https://www.npmjs.com/package/@zendeskgarden/react-draggable
[draggable size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-draggable
[draggable size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-draggable
[dropdowns.legacy npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns.legacy
[dropdowns.legacy npm link]: https://www.npmjs.com/package/@zendeskgarden/react-dropdowns.legacy
[dropdowns.legacy size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-dropdowns.legacy
[dropdowns.legacy size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-dropdowns.legacy
[dropdowns npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns
[dropdowns npm link]: https://www.npmjs.com/package/@zendeskgarden/react-dropdowns
[dropdowns size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-dropdowns
[dropdowns size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-dropdowns
[forms npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-forms
[forms npm link]: https://www.npmjs.com/package/@zendeskgarden/react-forms
[forms size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-forms
[forms size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-forms
[grid npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-grid
[grid npm link]: https://www.npmjs.com/package/@zendeskgarden/react-grid
[grid size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-grid
[grid size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-grid
[loaders npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-loaders
[loaders npm link]: https://www.npmjs.com/package/@zendeskgarden/react-loaders
[loaders size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-loaders
[loaders size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-loaders
[modals npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-modals
[modals npm link]: https://www.npmjs.com/package/@zendeskgarden/react-modals
[modals size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-modals
[modals size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-modals
[notifications npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-notifications
[notifications npm link]: https://www.npmjs.com/package/@zendeskgarden/react-notifications
[notifications size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-notifications
[notifications size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-notifications
[pagination npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-pagination
[pagination npm link]: https://www.npmjs.com/package/@zendeskgarden/react-pagination
[pagination size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-pagination
[pagination size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-pagination
[tabs npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tabs
[tabs npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tabs
[tabs size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tabs
[tabs size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tabs
[tables npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tables
[tables npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tables
[tables size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tables
[tables size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tables
[tags npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tags
[tags npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tags
[tags size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tags
[tags size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tags
[theming npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-theming
[theming npm link]: https://www.npmjs.com/package/@zendeskgarden/react-theming
[theming size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-theming
[theming size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-theming
[tooltips npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tooltips
[tooltips npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tooltips
[tooltips size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tooltips
[tooltips size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tooltips
[typography npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-typography
[typography npm link]: https://www.npmjs.com/package/@zendeskgarden/react-typography
[typography size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-typography
[typography size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-typography

## Usage

Garden React packages are ready to use in a
[Create React App](https://create-react-app.dev/) environment or together
with standard Rollup or webpack build configurations.

Here is a simple example to get you started:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

const App = () => (
  /* Include a ThemeProvider wrapper at the root of your app */
  <ThemeProvider>
    <Button>Example Garden button</Button>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

Check out more Garden React components in this sandbox IDE:

[![Edit Garden CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/zendeskgarden/react-components/tree/main/examples/codesandbox)

## Documentation

See Garden's [documentation website](https://garden.zendesk.com/) or click
the links below to learn more.

- [Versioning](docs/versioning.md) policy
- Major release [migration](docs/migration.md) instructions
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

Copyright 2025 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
