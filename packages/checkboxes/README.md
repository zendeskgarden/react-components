# @zendesk/garden-react-checkboxes

This package includes components relating to checkboxes in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-checkboxes
```

## Usage

```jsx static
import Checkbox from '@zendesk/garden-react-checkboxes/Checkbox';
import Label from '@zendesk/garden-react-checkboxes/Label';

initialState = {
  isChecked: false
};

<Checkbox checked={state.isChecked} onChange={event => setState({ isChecked: event.target.checked })}>
  <Label>Example Checkbox</Label>
</Checkbox>
```
