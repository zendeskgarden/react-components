# Garden React Components [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link] [![Coverage Status][coverage status badge]][coverage status link]<!-- markdownlint-disable -->

<!-- markdownlint-enable -->

[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/react-components/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/react-components/tree/main
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/react-components?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/react-components?type=dev
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

| Package                                                        | Version                                                             | Size                                                                 | Dependencies                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`@zendeskgarden/react-accordions`](packages/accordions)       | [![npm version][accordions npm version]][accordions npm link]       | [![Bundle Size][accordions size bundle]][accordions size link]       | [![Dependency Status][accordions dependency status]][accordions dependency link]       |
| [`@zendeskgarden/react-avatars`](packages/avatars)             | [![npm version][avatars npm version]][avatars npm link]             | [![Bundle Size][avatars size bundle]][avatars size link]             | [![Dependency Status][avatars dependency status]][avatars dependency link]             |
| [`@zendeskgarden/react-breadcrumbs`](packages/breadcrumbs)     | [![npm version][breadcrumbs npm version]][breadcrumbs npm link]     | [![Bundle Size][breadcrumbs size bundle]][breadcrumbs size link]     | [![Dependency Status][breadcrumbs dependency status]][breadcrumbs dependency link]     |
| [`@zendeskgarden/react-buttons`](packages/buttons)             | [![npm version][buttons npm version]][buttons npm link]             | [![Bundle Size][buttons size bundle]][buttons size link]             | [![Dependency Status][buttons dependency status]][buttons dependency link]             |
| [`@zendeskgarden/react-chrome`](packages/chrome)               | [![npm version][chrome npm version]][chrome npm link]               | [![Bundle Size][chrome size bundle]][chrome size link]               | [![Dependency Status][chrome dependency status]][chrome dependency link]               |
| [`@zendeskgarden/react-colorpickers`](packages/colorpickers)   | [![npm version][colorpickers npm version]][colorpickers npm link]   | [![Bundle Size][colorpickers size bundle]][colorpickers size link]   | [![Dependency Status][colorpickers dependency status]][colorpickers dependency link]   |
| [`@zendeskgarden/react-datepickers`](packages/datepickers)     | [![npm version][datepickers npm version]][datepickers npm link]     | [![Bundle Size][datepickers size bundle]][datepickers size link]     | [![Dependency Status][datepickers dependency status]][datepickers dependency link]     |
| [`@zendeskgarden/react-dropdowns`](packages/dropdowns)         | [![npm version][dropdowns npm version]][dropdowns npm link]         | [![Bundle Size][dropdowns size bundle]][dropdowns size link]         | [![Dependency Status][dropdowns dependency status]][dropdowns dependency link]         |
| [`@zendeskgarden/react-forms`](packages/forms)                 | [![npm version][forms npm version]][forms npm link]                 | [![Bundle Size][forms size bundle]][forms size link]                 | [![Dependency Status][forms dependency status]][forms dependency link]                 |
| [`@zendeskgarden/react-grid`](packages/grid)                   | [![npm version][grid npm version]][grid npm link]                   | [![Bundle Size][grid size bundle]][grid size link]                   | [![Dependency Status][grid dependency status]][grid dependency link]                   |
| [`@zendeskgarden/react-loaders`](packages/loaders)             | [![npm version][loaders npm version]][loaders npm link]             | [![Bundle Size][loaders size bundle]][loaders size link]             | [![Dependency Status][loaders dependency status]][loaders dependency link]             |
| [`@zendeskgarden/react-modals`](packages/modals)               | [![npm version][modals npm version]][modals npm link]               | [![Bundle Size][modals size bundle]][modals size link]               | [![Dependency Status][modals dependency status]][modals dependency link]               |
| [`@zendeskgarden/react-notifications`](packages/notifications) | [![npm version][notifications npm version]][notifications npm link] | [![Bundle Size][notifications size bundle]][notifications size link] | [![Dependency Status][notifications dependency status]][notifications dependency link] |
| [`@zendeskgarden/react-pagination`](packages/pagination)       | [![npm version][pagination npm version]][pagination npm link]       | [![Bundle Size][pagination size bundle]][pagination size link]       | [![Dependency Status][pagination dependency status]][pagination dependency link]       |
| [`@zendeskgarden/react-tabs`](packages/tabs)                   | [![npm version][tabs npm version]][tabs npm link]                   | [![Bundle Size][tabs size bundle]][tabs size link]                   | [![Dependency Status][tabs dependency status]][tabs dependency link]                   |
| [`@zendeskgarden/react-tables`](packages/tables)               | [![npm version][tables npm version]][tables npm link]               | [![Bundle Size][tables size bundle]][tables size link]               | [![Dependency Status][tables dependency status]][tables dependency link]               |
| [`@zendeskgarden/react-tags`](packages/tags)                   | [![npm version][tags npm version]][tags npm link]                   | [![Bundle Size][tags size bundle]][tags size link]                   | [![Dependency Status][tags dependency status]][tags dependency link]                   |
| [`@zendeskgarden/react-theming`](packages/theming)             | [![npm version][theming npm version]][theming npm link]             | [![Bundle Size][theming size bundle]][theming size link]             | [![Dependency Status][theming dependency status]][theming dependency link]             |
| [`@zendeskgarden/react-tooltips`](packages/tooltips)           | [![npm version][tooltips npm version]][tooltips npm link]           | [![Bundle Size][tooltips size bundle]][tooltips size link]           | [![Dependency Status][tooltips dependency status]][tooltips dependency link]           |
| [`@zendeskgarden/react-typography`](packages/typography)       | [![npm version][typography npm version]][typography npm link]       | [![Bundle Size][typography size bundle]][typography size link]       | [![Dependency Status][typography dependency status]][typography dependency link]       |

[accordions npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-accordions
[accordions npm link]: https://www.npmjs.com/package/@zendeskgarden/react-accordions
[accordions size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-accordions
[accordions size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-accordions
[accordions dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/accordions
[accordions dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/accordions
[avatars npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-avatars
[avatars npm link]: https://www.npmjs.com/package/@zendeskgarden/react-avatars
[avatars size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-avatars
[avatars size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-avatars
[avatars dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/avatars
[avatars dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/avatars
[breadcrumbs npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-breadcrumbs
[breadcrumbs npm link]: https://www.npmjs.com/package/@zendeskgarden/react-breadcrumbs
[breadcrumbs size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-breadcrumbs
[breadcrumbs size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-breadcrumbs
[breadcrumbs dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/breadcrumbs
[breadcrumbs dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/breadcrumbs
[buttons npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-buttons
[buttons npm link]: https://www.npmjs.com/package/@zendeskgarden/react-buttons
[buttons size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-buttons
[buttons size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-buttons
[buttons dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/buttons
[buttons dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/buttons
[chrome npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-chrome
[chrome npm link]: https://www.npmjs.com/package/@zendeskgarden/react-chrome
[chrome size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-chrome
[chrome size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-chrome
[chrome dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/chrome
[chrome dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/chrome
[colorpickers npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-colorpickers
[colorpickers npm link]: https://www.npmjs.com/package/@zendeskgarden/react-colorpickers
[colorpickers size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-colorpickers
[colorpickers size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-colorpickers
[colorpickers dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/colorpickers
[colorpickers dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/colorpickers
[datepickers npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-datepickers
[datepickers npm link]: https://www.npmjs.com/package/@zendeskgarden/react-datepickers
[datepickers size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-datepickers
[datepickers size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-datepickers
[datepickers dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/datepickers
[datepickers dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/datepickers
[dropdowns npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns
[dropdowns npm link]: https://www.npmjs.com/package/@zendeskgarden/react-dropdowns
[dropdowns size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-dropdowns
[dropdowns size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-dropdowns
[dropdowns dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/dropdowns
[dropdowns dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/dropdowns
[forms npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-forms
[forms npm link]: https://www.npmjs.com/package/@zendeskgarden/react-forms
[forms size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-forms
[forms size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-forms
[forms dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/forms
[forms dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/forms
[grid npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-grid
[grid npm link]: https://www.npmjs.com/package/@zendeskgarden/react-grid
[grid size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-grid
[grid size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-grid
[grid dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/grid
[grid dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/grid
[loaders npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-loaders
[loaders npm link]: https://www.npmjs.com/package/@zendeskgarden/react-loaders
[loaders size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-loaders
[loaders size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-loaders
[loaders dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/loaders
[loaders dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/loaders
[modals npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-modals
[modals npm link]: https://www.npmjs.com/package/@zendeskgarden/react-modals
[modals size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-modals
[modals size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-modals
[modals dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/modals
[modals dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/modals
[notifications npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-notifications
[notifications npm link]: https://www.npmjs.com/package/@zendeskgarden/react-notifications
[notifications size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-notifications
[notifications size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-notifications
[notifications dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/notifications
[notifications dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/notifications
[pagination npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-pagination
[pagination npm link]: https://www.npmjs.com/package/@zendeskgarden/react-pagination
[pagination size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-pagination
[pagination size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-pagination
[pagination dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/pagination
[pagination dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/pagination
[tabs npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tabs
[tabs npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tabs
[tabs size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tabs
[tabs size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tabs
[tabs dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/tabs
[tabs dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/tabs
[tables npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tables
[tables npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tables
[tables size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tables
[tables size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tables
[tables dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/tables
[tables dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/tables
[tags npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tags
[tags npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tags
[tags size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tags
[tags size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tags
[tags dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/tags
[tags dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/tags
[theming npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-theming
[theming npm link]: https://www.npmjs.com/package/@zendeskgarden/react-theming
[theming size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-theming
[theming size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-theming
[theming dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/theming
[theming dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/theming
[tooltips npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-tooltips
[tooltips npm link]: https://www.npmjs.com/package/@zendeskgarden/react-tooltips
[tooltips size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-tooltips
[tooltips size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-tooltips
[tooltips dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/tooltips
[tooltips dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/tooltips
[typography npm version]: https://flat.badgen.net/npm/v/@zendeskgarden/react-typography
[typography npm link]: https://www.npmjs.com/package/@zendeskgarden/react-typography
[typography size bundle]: https://flat.badgen.net/bundlephobia/minzip/@zendeskgarden/react-typography
[typography size link]: https://bundlephobia.com/result?p=@zendeskgarden/react-typography
[typography dependency status]: https://flat.badgen.net/david/dep/zendeskgarden/react-components/packages/typography
[typography dependency link]: https://david-dm.org/zendeskgarden/react-components?path=packages/typography

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

Copyright 2021 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
