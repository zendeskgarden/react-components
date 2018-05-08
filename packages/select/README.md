# @zendeskgarden/react-select [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-select.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-select) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/select&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/select) <!-- markdownlint-disable -->
<!-- markdownlint-enable -->

This package includes components relating to select fields in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-select
```

## Usage

```jsx static
import SelectField from '@zendeskgarden/react-select/SelectField';
import Label from '@zendeskgarden/react-select/Label';
import Hint from '@zendeskgarden/react-select/Hint';
import Select from '@zendeskgarden/react-select/Select';
import Item from '@zendeskgarden/react-select/Item';

initialState = {
  selectedKey: 'item-1'
};

<SelectField>
  <Label>Example Select</Label>
  <Hint>Hinty hint</Hint>
  <Select
    selectedKey={state.selectedKey}
    onChange={selectedKey => setState({ selectedKey })}
    options={[<Item key="item-1">Item 1</Item>, <Item key="item-2">Item 2</Item>]}
  >
    {state.selectedKey}
  </Select>
</SelectField>;
```
