# @zendesk/garden-react-textfields

This package includes components relating to textfields in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-textfields
```

## Usage

```jsx static
import TextField from '@zendesk/garden-react-textfields/TextField';
import Label from '@zendesk/garden-react-textfields/Label';
import Hint from '@zendesk/garden-react-textfields/Hint';
import Input from '@zendesk/garden-react-textfields/Input';
import Message from '@zendesk/garden-react-textfields/Message';

<TextField>
  <Label>Example Garden Input</Label>
  <Hint>Hinty hint</Hint>
  <Input placeholder="Accepts all native input props" />
  <Message>Default message styling</Message>
</TextField>;
```
