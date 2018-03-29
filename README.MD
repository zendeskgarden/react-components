# Garden React Components [![Build Status](https://travis-ci.com/zendeskgarden/react-components.svg?token=dDt9s6smCMgz269xNbpz&branch=next)](https://travis-ci.com/zendeskgarden/react-components)

> :seedling: Garden is a design system for Zendesk

Garden React provides consistent behavior for Garden components.
React components are maintained following a multi-package approach where
components are packaged and published individually, but combined under
this single repository. Components rely on Garden
[CSS](https://github.com/zendeskgarden/css-components) for styling.

## Installation

See the individual package README for the React component you would like
to install.

| Package                                                         |
| --------------------------------------------------------------- |
| [`@zendesk/garden-react-buttons`](packages/buttons)             |
| [`@zendesk/garden-react-checkboxes`](packages/checkboxes)       |
| [`@zendesk/garden-react-notifications`](packages/notifications) |
| [`@zendesk/garden-react-pagination`](packages/pagination)       |
| [`@zendesk/garden-react-selection`](packages/selection)         |
| [`@zendesk/garden-react-tabs`](packages/tabs)                   |
| [`@zendesk/garden-react-textfields`](packages/textfields)       |
| [`@zendesk/garden-react-theming`](packages/theming)             |
| [`@zendesk/garden-react-tooltips`](packages/tooltips)           |

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages as
dependencies in your own program.

## Usage

To consume our packages we require [CSS-modules](https://github.com/css-modules/css-modules) be enabled within your webpack config. This allows us to leverage the styling that currently exists within our [CSS packages](https://github.com/zendeskgarden/css-components).

By not bundling the CSS with each package it ensures that tree-shaking is handled correctly with products that depend on the CSS for other, custom areas.

### Webpack configuration

Use this configuration to enable CSS-modules globally.

```js
// webpack >= 2.2.1
{
  test: /\.css$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
      }
    }
  ]
}
```

### Limited Webpack Configuration

This configuration limits CSS-modules to the Garden React packages. Useful if you are already using global CSS within your application.

```js
// webpack >= 2.2.1
{
  test: /\.css$/,
  include: /node_modules\/@zendesk\/garden-css/, // limits imports affected by loader
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
      }
    }
  ]
}
```

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

Copyright 2018 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
