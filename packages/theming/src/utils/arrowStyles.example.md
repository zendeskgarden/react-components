```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Range, Toggle, Field, Input, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  animate: false,
  border: true,
  boxShadow: true,
  inset: 0,
  position: 'bottom',
  size: 6
};

const StyledDiv = styled.div`
  box-shadow: ${state.boxShadow &&
  DEFAULT_THEME.shadows.lg('8px', '12px', getColor('chromeHue', 600, DEFAULT_THEME, 0.15))};
  border: ${state.border && `${DEFAULT_THEME.borders.sm} ${getColor('primaryHue')}`};
  background-color: ${getColor('primaryHue', 200)};

  ${arrowStyles(state.position, {
    size: `${state.size}px`,
    inset: `${state.inset}px`,
    animationModifier: '[data-garden-animate="true"]'
  })};
`;

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.position} onSelect={position => setState({ position })}>
          <SelectField>
            <SelectLabel>Position</SelectLabel>
            <Select isCompact>{state.position}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="top-left">top-left</Item>
            <Item value="top">top</Item>
            <Item value="top-right">top-right</Item>
            <Item value="right-top">right-top</Item>
            <Item value="right">right</Item>
            <Item value="right-bottom">right-bottom</Item>
            <Item value="bottom-right">bottom-right</Item>
            <Item value="bottom">bottom</Item>
            <Item value="bottom-left">bottom-left</Item>
            <Item value="left-bottom">left-bottom</Item>
            <Item value="left">left</Item>
            <Item value="left-top">left-top</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.boxShadow}
            onChange={event => setState({ boxShadow: event.target.checked })}
          >
            <Label>Box shadow</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.border}
            onChange={event => setState({ border: event.target.checked })}
          >
            <Label>Border</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.animate}
            onChange={event => setState({ animate: event.target.checked })}
          >
            <Label>Animate</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-sm">
          <Label>Size ({state.size}px)</Label>
          <Range
            max={10}
            min={2}
            onChange={event => setState({ size: parseInt(event.target.value, 10) })}
            value={state.size}
          />
        </Field>
        <Field className="u-mt-xs">
          <Label>Inset ({state.inset}px)</Label>
          <Range
            max={4}
            min={-4}
            onChange={event => setState({ inset: parseInt(event.target.value, 10) })}
            value={state.inset}
          />
        </Field>
      </Well>
    </Col>
    <Col>
      <div className="u-m-xxl" style={{ position: 'relative', zIndex: 0 }}>
        <StyledDiv className="u-p-xxl" data-garden-animate={state.animate}></StyledDiv>
      </div>
    </Col>
  </Row>
</Grid>;
```
