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
      <Item key={`${option.label}-${option.value}`} value={option}>
        <Color color={option.value} name={option.label} includeSample />
      </Item>
    ))}
  </Menu>
</Dropdown>;
```
