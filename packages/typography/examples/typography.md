```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  monospace: false,
  size: 'MD'
};

const Typography = ({ size, children, ...props }) => {
  switch (size) {
    case 'SM':
      return <SM {...props}>{children}</SM>;
    case 'MD':
      return <MD {...props}>{children}</MD>;
    case 'LG':
      return <LG {...props}>{children}</LG>;
    case 'XL':
      return <XL {...props}>{children}</XL>;
    case 'XXL':
      return <XXL {...props}>{children}</XXL>;
    case 'XXXL':
      return <XXXL {...props}>{children}</XXXL>;
  }
};

<>
  <Well recessed style={{ width: 300 }}>
    <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
      <SelectField>
        <SelectLabel>Size</SelectLabel>
        <Select small>{state.size}</Select>
      </SelectField>
      <Menu small>
        <Item value="SM">SM</Item>
        <Item value="MD">MD</Item>
        <Item value="LG">LG</Item>
        <Item value="XL">XL</Item>
        <Item value="XXL">XXL</Item>
        <Item value="XXXL">XXXL</Item>
      </Menu>
    </Dropdown>
    <Field>
      <Toggle
        checked={state.monospace}
        disabled={/^X/.test(state.size)}
        onChange={event => setState({ monospace: event.target.checked })}
      >
        <Label style={{ marginTop: 8 }}>Monospace</Label>
      </Toggle>
    </Field>
  </Well>
  <Typography as="p" monospace={state.monospace} size={state.size}>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth
    tatsoi tomatillo melon azuki bean garlic. Parsley shallot courgette tatsoi pea sprouts fava bean
    collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
    zucchini.
  </Typography>
  <Typography as="p" monospace={state.monospace} size={state.size} style={{ marginBottom: 0 }}>
    Grumpy wizards make toxic brew for the evil Queen and Jack.
  </Typography>
</>;
```
