The `<Spinner />` component includes several accessibility
and usability features:

- Inherits the `font-size` and `color` properties
  from it's parent element and additionally allows local overrides
- Delays the initial render of the component to reduce UI shifting
  in normal loading conditions
- Includes accessibility attributes to identify as an `indeterminate progress bar`

### Basic Usage

```jsx
const { zdColorBlue500 } = require('@zendeskgarden/css-variables');

<Spinner color={zdColorBlue500} size="48px" />;
```

### Advanced Usage

```jsx
const { zdColorBlue500, zdColorGrey500 } = require('@zendeskgarden/css-variables');
const { RangeField, Label, Range } = require('@zendeskgarden/react-ranges/src');
const {
  Dropdown,
  Field,
  Label: DropdownLabel,
  Select,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

const colors = [
  {
    label: 'BLUE-500',
    value: zdColorBlue500
  },
  {
    label: 'GREY-500',
    value: zdColorGrey500
  },
  {
    label: 'INHERIT',
    value: 'inherit'
  }
];

const SpacedRow = styled(Row)`
  margin-bottom: 40px;
`;

const ColorSampleSquare = styled.div`
  background-color: ${props => props.color};
  width: 1em;
  height: 1em;
`;

const ColorSamplePreview = styled.div`
  cursor: default;
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

<State
  initialState={{
    size: 48,
    duration: 1250,
    color: colors[0]
  }}
>
  {(state, setState) => (
    <Grid>
      <SpacedRow>
        <Col md={6}>
          <RangeField>
            <Label>
              Size {state.size}
              px
            </Label>
            <Range
              value={state.size}
              onChange={event => setState({ size: event.target.value })}
              min={30}
              max={250}
            />
          </RangeField>
        </Col>
        <Col md={6}>
          <RangeField>
            <Label>
              Duration {state.duration}
              ms
            </Label>
            <Range
              value={state.duration}
              onChange={event => setState({ duration: parseFloat(event.target.value) })}
              min={625}
              max={2500}
              step={625}
            />
          </RangeField>
        </Col>
        <Col md={6}>
          <Dropdown
            selectedItem={state.color}
            onSelect={color => setState({ color })}
            downshiftProps={{ itemToString: item => item && item.label }}
          >
            <Field>
              <DropdownLabel>Color</DropdownLabel>
              <Select>
                <Color color={state.color.value} name={state.color.label} />
              </Select>
            </Field>
            <Menu>
              {colors.map(colorItem => (
                <Item key={colorItem.value} value={colorItem}>
                  <Color color={colorItem.value} name={colorItem.label} includeSample />
                </Item>
              ))}
            </Menu>
          </Dropdown>
        </Col>
      </SpacedRow>
      <SpacedRow>
        <Col style={{ textAlign: 'center' }}>
          <Spinner size={`${state.size}px`} color={state.color.value} duration={state.duration} />
        </Col>
      </SpacedRow>
    </Grid>
  )}
</State>;
```
