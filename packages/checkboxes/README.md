# @zendeskgarden/react-checkboxes [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-checkboxes.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-checkboxes)

This package includes components relating to checkboxes in the
[Garden Design System](https://zendeskgarden.github.io/).

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
