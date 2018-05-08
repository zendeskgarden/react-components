# @zendeskgarden/react-toggles [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-toggles.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-toggles) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/toggles&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/toggles) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to toggles in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-toggles
```

## Usage

```jsx static
import Toggle from '@zendeskgarden/react-toggles/Toggle';
import Label from '@zendeskgarden/react-toggles/Label';

initialState = {
  isEnabled: false
};

<Toggle checked={state.isEnabled} onChange={event => setState({ isEnabled: event.target.checked })}>
  <Label>Example Toggle</Label>
</Toggle>;
```
