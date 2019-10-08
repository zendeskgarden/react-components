```jsx
<Grid>
  <Row>
    <Col>
      Cat.png
      <Progress value={10} />
    </Col>
  </Row>
  <Row>
    <Col>
      Dog.png
      <Progress value={40} />
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row>
    <Col>
      Small
      <Progress value={10} size="small" />
    </Col>
  </Row>
  <Row>
    <Col>
      Default
      <Progress value={40} />
    </Col>
  </Row>
  <Row>
    <Col>
      Large
      <Progress value={80} size="large" />
    </Col>
  </Row>
</Grid>
```

### Colors

```jsx
const { zdColorGrey600, zdColorBlue600, zdColorRed600 } = require('@zendeskgarden/css-variables');

<Grid>
  <Row>
    <Col>
      <Progress value={10} color={zdColorGrey600} />
    </Col>
  </Row>
  <Row>
    <Col>
      <Progress value={40} color={zdColorBlue600} />
    </Col>
  </Row>
  <Row>
    <Col>
      <Progress value={80} color={zdColorRed600} />
    </Col>
  </Row>
  <Row>
    <Col>
      <Progress value={100} />
    </Col>
  </Row>
</Grid>;
```

### Advanced Usage

```jsx
const {
  zdColorBlue600,
  zdColorGrey600,
  zdColorGreen600,
  zdColorRed600
} = require('@zendeskgarden/css-variables');
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
    label: 'Default',
    value: zdColorGreen600
  },
  {
    label: 'GREY-600',
    value: zdColorGrey600
  },
  {
    label: 'BLUE-600',
    value: zdColorBlue600
  },
  {
    label: 'RED-600',
    value: zdColorRed600
  }
];

const sizes = [
  {
    label: 'Small',
    value: 'small'
  },
  {
    label: 'Medium',
    value: 'medium'
  },
  {
    label: 'Large',
    value: 'large'
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
    size: sizes[1],
    progress: 20,
    color: colors[0]
  }}
>
  {(state, setState) => (
    <Grid>
      <SpacedRow>
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
        <Col md={6}>
          <Dropdown
            selectedItem={state.size}
            onSelect={size => setState({ size })}
            downshiftProps={{ itemToString: item => item && item.label }}
          >
            <Field>
              <DropdownLabel>Size</DropdownLabel>
              <Select>{state.size.label}</Select>
            </Field>
            <Menu>
              {sizes.map(size => (
                <Item key={size.value} value={size}>
                  {size.label}
                </Item>
              ))}
            </Menu>
          </Dropdown>
        </Col>
        <Col md={12}>
          <RangeField>
            <Label>Progress {state.progress}%</Label>
            <Range
              value={state.progress}
              onChange={event => setState({ progress: parseInt(event.target.value) })}
              min={0}
              max={100}
              step={1}
            />
          </RangeField>
        </Col>
      </SpacedRow>
      <SpacedRow>
        <Col md={12}>
          Sample
          <Progress value={state.progress} size={state.size.value} color={state.color.value} />
        </Col>
      </SpacedRow>
    </Grid>
  )}
</State>;
```
