# Zendesk Garden React components

[![Build Status](https://travis-ci.com/zendeskgarden/react-components.svg?token=qLYczvyB4t6HuYhWeUq4&branch=master)](https://travis-ci.com/zendeskgarden/react-components)

## Description

This project provides React components that use
[Zendesk Garden](http://zendeskgarden.github.io/) for styling.

You can see the running component sheet [here](https://zendeskgarden.github.io/react-components).

## Getting Started

Install the components:

```
$ npm install --save-dev @zendesk/garden-react-components
```

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Now you are ready to `import` or `require` the components:

```js
import { Button, Avatar } from '@zendesk/garden-react-components'
```

### Global `font-family` setup

If you're not depending on
[Bedrock](https://github.com/zendeskgarden/css-bedrock) as your
foundational CSS, install Garden
[css-variables](https://github.com/zendeskgarden/css-variables) and
apply the system font stack (available from any one of the `dist` file
formats) to the `font-family` property for your `<html>` element.

```
$ npm install --save-dev @zendesk/garden-css-variables
```

### Example

See the [example](https://github.com/zendeskgarden/react-components/tree/master/example)
for more information on the setup.

## Optimizing your build

Webpack 2 currently does not tree-shake index files containing re-exports
because of a bug. This will be fixed at some point. To help Webpack a bit, you
can transform imports to point to the individual components
using [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports):

```js
import {Button, Menu, Text} from '@zendesk/garden-react-components'
```

will be transformed to:

```js
import Button from '@zendesk/garden-react-components/lib/Button'
import Menu from '@zendesk/garden-react-components/lib/Menu'
import Text from '@zendesk/garden-react-components/lib/Text'
```

You setup the plugin by adding the plugin to your babel configuration:

```json
{
  "plugins": [
    ["transform-imports", {
      "@zendesk/garden-react-components": {
        "transform": "@zendesk/garden-react-components/lib/${member}",
        "preventFullImport": true
      }
    }]
  ],
  ...
}
```

Notice: Webpack will only tree-shake the components if the components is in the
same Webpack chunk as the code that is using them. So if you put the components
in a vendor bundle Webpack will include all the components.

## Owners
* Email: [bastards@zendesk.com](mailto:bastards@zendesk.com)
* Slack: [#react](https://zendesk.slack.com/messages/react/) or [#garden](https://zendesk.slack.com/messages/garden/)
* GitHub: `@zendesk/bastards`

## Contribute

Please, refer to our [contribution guidelines](CONTRIBUTING.md).

## Bugs

Bugs and feature requests are tracked in the
[Github issue tracker](https://github.com/zendeskgarden/react-components/issues).

Note that bugs should have clear reproduction steps, some notion of
urgency/scope, and relevant references.

## Supported browsers

The last two versions of the following browsers are supported:

- Google Chrome
- Mozilla Firefox
- Apple Safari
- Microsoft Edge

Microsoft Internet Explorer 11 is also supported.

Browser support is publicly stated [here](https://support.zendesk.com/hc/en-us/articles/203664346-Getting-started-with-Help-Center#topic_xxg_2pf_mk)

react-components requires [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) or some other ES6 polyfill to work in some browsers.
