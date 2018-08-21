The `<Dots />` component includes several accessibility
and usability features:

- Inherits the `font-size` and `color` properties
  from it's parent element and additionally allows local overrides
- Delays the initial render of the component to reduce UI shifting
  in normal loading conditions
- Includes accessibility attributes to identify as an `indeterminate progress bar`

### Basic Usage

```jsx
const { zdColorBlue500 } = require('@zendeskgarden/css-variables');

<Dots color={zdColorBlue500} size="50px" />;
```

### Loading Button

The `Dots` loader inherits it's size and color from it's parent element by default.

For usages where a rendering delay is not necessary, pass `[delayMS={0}]`

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

class ButtonExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        isLoading: !prevState.isLoading
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Button primary>
        {!this.state.isLoading && 'This button has a delayed loading state'}
        {this.state.isLoading && <Dots delayMS={0} />}
      </Button>
    );
  }
}
<ButtonExample />;
```

### Advanced Usage

```jsx
const { RangeField, Label, Range } = require('@zendeskgarden/react-ranges/src');
const {
  SelectField,
  Label: SelectLabel,
  Select,
  Item
} = require('@zendeskgarden/react-select/src');

const colors = {
  'BLUE-500': '#337FBD',
  'GREY-500': '#87929D',
  INHERIT: 'inherit'
};

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

initialState = {
  selectedKey: 'Apple Green'
};

<State
  initialState={{
    size: 50,
    velocity: 0,
    color: 'BLUE-500'
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
              value={state.width}
              onChange={event => setState({ size: event.target.value })}
              min={30}
              max={250}
            />
          </RangeField>
        </Col>
        <Col md={6}>
          <RangeField>
            <Label>Velocity {state.velocity}</Label>
            <Range
              value={state.velocity}
              onChange={event => setState({ velocity: parseFloat(event.target.value) })}
              min={-0.5}
              max={1}
              step={0.05}
            />
          </RangeField>
        </Col>
        <Col md={6}>
          <SelectField>
            <SelectLabel>Color</SelectLabel>
            <Select
              selectedKey={state.color}
              onChange={color => setState({ color })}
              options={[
                Object.keys(colors).map(colorKey => (
                  <Item key={colorKey} textValue={colorKey}>
                    <Color color={colors[colorKey]} name={colorKey} includeSample />
                  </Item>
                ))
              ]}
            >
              <Color color={colors[state.color]} name={state.color} />
            </Select>
          </SelectField>
        </Col>
      </SpacedRow>
      <SpacedRow>
        <Col style={{ textAlign: 'center' }}>
          <Dots size={`${state.size}px`} velocity={state.velocity} color={colors[state.color]} />
        </Col>
      </SpacedRow>
    </Grid>
  )}
</State>;
```
