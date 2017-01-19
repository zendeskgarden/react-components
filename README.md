# Zendesk Garden React components

[![Build Status](https://travis-ci.com/zendeskgarden/react-components.svg?token=qLYczvyB4t6HuYhWeUq4&branch=master)](https://travis-ci.com/zendeskgarden/react-components)

## Description

This projects provides React components that uses the
[Zendesk Garden](http://zendeskgarden.github.io/) for styling.

You can see the running component sheet [here](https://zendeskgarden.github.io/react-components).

## Getting Started

Install the components:

```
$ npm install --save-dev git+ssh://git@github.com/zendeskgarden/react-components.git#{version}
```

Now you are ready to `import` or `require` the components:

```js
import { Button, Avatar } from 'zd-react-components'
```

In order to make the components look correctly, you need to include the
[css-bedrock](https://github.com/zendeskgarden/css-bedrock) stylesheet.

```
$ npm install --save git+ssh://git@github.com:zendeskgarden/css-bedrock.git
```

See the [example](https://github.com/zendeskgarden/react-components/tree/master/example)
for more information on the setup.

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
