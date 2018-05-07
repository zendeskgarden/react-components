# @zendesk/garden-react-select

This package includes components relating to select fields in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendesk/garden-react-select
```

## Usage

```jsx static
import SelectField from '@zendesk/garden-react-select/SelectField';
import Label from '@zendesk/garden-react-select/Label';
import Hint from '@zendesk/garden-react-select/Hint';
import Select from '@zendesk/garden-react-select/Select';
import Item from '@zendesk/garden-react-select/Item';

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
