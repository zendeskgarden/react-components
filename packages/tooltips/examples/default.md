The `Tooltip` component acts as a high-abstraction API over the
[useTooltip()](https://www.npmjs.com/package/@zendeskgarden/container-tooltip)
hook.

All events and attributes passed to the root element are proxied onto the
tooltip element.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Field, Label, Toggle, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

const StyledSpacer = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
`;

<State
  initialState={{
    placement: 'top',
    hasArrow: true,
    type: 'dark',
    delayMS: 500
  }}
>
  {(state, setState) => (
    <Grid>
      <Row>
        <Col md={4}>
          <Well recessed>
            <StyledSpacer>
              <Dropdown
                selectedItem={state.placement}
                onSelect={placement => setState({ placement })}
              >
                <SelectField>
                  <SelectLabel>Placement</SelectLabel>
                  <Select small>{state.placement}</Select>
                </SelectField>
                <Menu small>
                  <Item value="auto">auto</Item>
                  <Item value="top">top</Item>
                  <Item value="top-start">top-start</Item>
                  <Item value="top-end">top-end</Item>
                  <Item value="bottom">bottom</Item>
                  <Item value="bottom-start">bottom-start</Item>
                  <Item value="bottom-end">bottom-end</Item>
                  <Item value="end">end</Item>
                  <Item value="end-top">end-top</Item>
                  <Item value="end-bottom">end-bottom</Item>
                  <Item value="start">start</Item>
                  <Item value="start-top">start-top</Item>
                  <Item value="start-bottom">start-bottom</Item>
                </Menu>
              </Dropdown>
            </StyledSpacer>
            <StyledSpacer>
              <Field>
                <Label>Delay ({state.delayMS} ms)</Label>
                <Range
                  step={50}
                  min={100}
                  max={10000}
                  value={state.delayMS}
                  onChange={event => setState({ delayMS: parseInt(event.target.value) })}
                />
              </Field>
            </StyledSpacer>
            <StyledSpacer>
              <Field>
                <Toggle
                  checked={state.hasArrow}
                  onChange={e => setState({ hasArrow: e.target.checked })}
                >
                  <Label>Arrow</Label>
                </Toggle>
              </Field>
            </StyledSpacer>
          </Well>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tooltip
            content="This is a small tooltip"
            hasArrow={state.hasArrow}
            placement={state.placement}
            delayMilliseconds={state.delayMS}
            initialIsVisible
          >
            <Button>Default tooltip</Button>
          </Tooltip>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tooltip
            content={
              <>
                <Title>Light Tooltip</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Paragraph>
              </>
            }
            hasArrow={state.hasArrow}
            placement={state.placement}
            type="light"
            initialIsVisible
            delayMilliseconds={state.delayMS}
          >
            <Button>Light tooltip</Button>
          </Tooltip>
        </Col>
      </Row>
    </Grid>
  )}
</State>;
```
