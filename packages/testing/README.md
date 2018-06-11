# @zendeskgarden/react-testing [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-testing.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-testing)

This package includes utilities relating to testing in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-testing

# Peer Dependencies - Also Required
npm install react enzyme @zendeskgarden/react-theming
```

## Enzyme Utilities

When testing Garden components with [enzyme](http://airbnb.io/enzyme/), many times you are
required to wrap our components with a [ThemeProvider](https://garden.zendesk.com/react-components/theming/#themeprovider).
Additionally, you may have custom RTL logic that you would like to easily test without modifying
an additional `ThemeProvider`.

To simplify this we provide two wrappers around the enzyme `shallow` and `mount` renderers that
allow easy RTL and theme testing.
