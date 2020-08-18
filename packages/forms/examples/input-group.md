### Components

- `InputGroup` Accepts all `div` attributes and the following props:
  - [`isCompact`] Apply compact styling
- `InputGroup.Prepend` Accepts all `div` attributes
- `InputGroup.Append` Accepts all `div` attributes

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Field>
  <Label>Input Group</Label>
  <InputGroup>
    <InputGroup.Prepend>
      <Button focusInset>A</Button>
    </InputGroup.Prepend>
    <InputGroup.Prepend>
      <Button focusInset>B</Button>
    </InputGroup.Prepend>
    <Input placeholder="Input content" />
    <InputGroup.Append>
      <Button focusInset isPrimary>
        Copy
      </Button>
    </InputGroup.Append>
  </InputGroup>
</Field>;
```
