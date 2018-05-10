# @zendeskgarden/react-ranges [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-ranges.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-ranges) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/ranges&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/ranges) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

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
