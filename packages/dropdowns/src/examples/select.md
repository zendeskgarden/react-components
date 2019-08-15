The `<Select>` and `<Autocomplete>` components require a parent `<Field>` component.

This component provides additional styling and attributes necessary
for an accessible experience. If you do not provide a `<Label>` with your implementation
ensure that an `aria-label` is provided with your interactive element.

```js
const options = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' }
];

initialState = {
  selectedItem: options[0]
};

<Dropdown
  selectedItem={state.selectedItem}
  onSelect={selectedItem => setState({ selectedItem })}
  downshiftProps={{ itemToString: item => item && item.label }}
>
  <Field>
    <Label>Default Layout</Label>
    <Hint>This is a basic Select</Hint>
    <Select>{state.selectedItem.label}</Select>
  </Field>
  <Menu>
    {options.map(option => (
      <Item key={option.value} value={option}>
        {option.label}
      </Item>
    ))}
  </Menu>
</Dropdown>;
```

### Advanced Customization

```js
const options = [
  { label: 'Support Green', value: PALETTE.product.support },
  { label: 'Message Green', value: PALETTE.product.message },
  { label: 'Explore Blue', value: PALETTE.product.explore },
  { label: 'Guide Pink', value: PALETTE.product.guide },
  { label: 'Connect Red', value: PALETTE.product.connect },
  { label: 'Chat Orange', value: PALETTE.product.chat },
  { label: 'Talk Yellow', value: PALETTE.product.talk },
  { label: 'Sell Gold', value: PALETTE.product.sell }
];

const ColorSampleSquare = styled.div`
  background-color: ${props => props.color};
  width: 1em;
  height: 1em;
`;

const ColorSamplePreview = styled.div`
  cursor: default;
  display: inline-block;
`;

const InlineItem = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const Color = ({ name, color, includeSample }) =>
  includeSample ? (
    <div>
      <InlineItem>
        <ColorSampleSquare color={color} />
      </InlineItem>
      <InlineItem>{name}</InlineItem>
      <InlineItem>({color})</InlineItem>
    </div>
  ) : (
    <ColorSamplePreview>
      {name} (<span style={{ color }}>{color}</span>)
    </ColorSamplePreview>
  );

initialState = {
  selectedItem: options[0]
};

<Dropdown
  selectedItem={state.selectedItem}
  onSelect={selectedItem => setState({ selectedItem })}
  downshiftProps={{ itemToString: item => item && item.label }}
>
  <Field>
    <Label>Product Color</Label>
    <Hint>The branded colors for the Zendesk products</Hint>
    <Select>
      <Color color={state.selectedItem.value} name={state.selectedItem.label} />
    </Select>
  </Field>
  <Menu>
    {options.map(option => (
      <Item key={option.value} value={option}>
        <Color color={option.value} name={option.label} includeSample />
      </Item>
    ))}
  </Menu>
</Dropdown>;
```
