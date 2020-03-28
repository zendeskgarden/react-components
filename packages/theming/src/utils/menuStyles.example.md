```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Toggle, Field, Input, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  animate: true,
  hidden: true,
  position: 'bottom'
};

const ARROW_POSITION = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

const StyledMenu = styled.div`
  width: 100px;
  height: 100px;
  padding-top: 41px !important;
  text-align: center !important;

  ${arrowStyles(ARROW_POSITION[state.position], {
    animationModifier: '[data-garden-animate="true"]'
  })};
`;

const StyledWrapper = styled.div`
  ${props =>
    menuStyles(state.position, {
      theme: props.theme,
      hidden: state.hidden,
      margin: '8px',
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

const TOP = {
  right: 'calc(-50% - 8px)',
  left: 'calc(-50% - 8px)'
};

const RIGHT = {
  left: '100%'
};

const BOTTOM = {
  top: '100%'
};

const LEFT = {
  right: '100%'
};

const style = {
  top: TOP[state.position],
  right: RIGHT[state.position],
  bottom: BOTTOM[state.position],
  left: LEFT[state.position]
};

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
            <Item value="top">top</Item>
            <Item value="right">right</Item>
            <Item value="bottom">bottom</Item>
            <Item value="left">left</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.animate}
            onChange={event => setState({ animate: event.target.checked })}
          >
            <Label>Animate</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col alignSelf="center" style={{ textAlign: 'center' }}>
      <div className="u-display-inline-block u-position-relative">
        <Button onClick={event => setState({ hidden: !state.hidden })}>Trigger</Button>
        <StyledWrapper data-garden-animate={state.animate} style={style}>
          <StyledMenu data-garden-animate={state.animate}>Menu</StyledMenu>
        </StyledWrapper>
      </div>
    </Col>
  </Row>
</Grid>;
```
