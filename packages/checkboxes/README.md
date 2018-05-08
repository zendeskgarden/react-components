# @zendeskgarden/react-checkboxes [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-checkboxes.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-checkboxes) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/checkboxes&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/checkboxes) <!-- markdownlint-disable -->
<!-- markdownlint-enable -->

This package includes components relating to checkboxes in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-checkboxes
```

## Usage

```jsx static
import Checkbox from '@zendeskgarden/react-checkboxes/Checkbox';
import Label from '@zendeskgarden/react-checkboxes/Label';

initialState = {
  isChecked: false
};

<Checkbox
  checked={state.isChecked}
  onChange={event => setState({ isChecked: event.target.checked })}
>
  <Label>Example Checkbox</Label>
</Checkbox>;
```
