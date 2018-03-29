# @zendesk/garden-react-toggles

This package includes components relating to toggles in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-toggles
```

## Usage

```jsx static
import Toggle from '@zendesk/garden-react-toggles/Toggle';
import Label from '@zendesk/garden-react-toggles/Label';

initialState = {
  isEnabled: false
};

<Toggle checked={state.isEnabled} onChange={event => setState({ isEnabled: event.target.checked })}>
  <Label>Example Toggle</Label>
</Toggle>
```
