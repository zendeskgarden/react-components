# @zendeskgarden/react-ranges

This package includes components relating to ranges in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-ranges
```

## Usage

```jsx static
import RangeField from '@zendeskgarden/react-ranges/RangeField';
import Label from '@zendeskgarden/react-ranges/Label';
import Hint from '@zendeskgarden/react-ranges/Hint';
import Range from '@zendeskgarden/react-ranges/Range';
import Message from '@zendeskgarden/react-ranges/Message';

initialState = {
  value: 25
};

<RangeField>
  <Label>Labely</Label>
  <Hint>Hint</Hint>
  <Range
    step={5}
    min={0}
    max={100}
    value={state.value}
    onChange={event => setState({ value: event.target.value })}
  />
  <Message>Example Messaging</Message>
</RangeField>;
```
