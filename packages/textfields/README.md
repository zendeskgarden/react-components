# @zendeskgarden/react-textfields [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-textfields.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-textfields) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/textfields&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/textfields) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to textfields in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-textfields
```

## Usage

```jsx static
import TextField from '@zendeskgarden/react-textfields/TextField';
import Label from '@zendeskgarden/react-textfields/Label';
import Hint from '@zendeskgarden/react-textfields/Hint';
import Input from '@zendeskgarden/react-textfields/Input';
import Message from '@zendeskgarden/react-textfields/Message';

<TextField>
  <Label>Example Garden Input</Label>
  <Hint>Hinty hint</Hint>
  <Input placeholder="Accepts all native input props" />
  <Message>Default message styling</Message>
</TextField>;
```
