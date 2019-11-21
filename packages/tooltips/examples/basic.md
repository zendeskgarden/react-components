The `Tooltip` component acts as a high-abstraction API over the
[useTooltip()](https://www.npmjs.com/package/@zendeskgarden/container-tooltip)
hook.

All events and attributes passed to the root element are proxied onto the
tooltip element.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Well, Alert, Title: AlertTitle } = require('@zendeskgarden/react-notifications/src');
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

const retrieveTooltipContent = (size, type) => {
  const shortValue = 'Lorem ipsum dolor';
  const mediumValue = 'Lorem ipsum dolor sit amet, consect.';
  const longValue =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
    ' ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ' +
    'ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  if (size === 'default') {
    if (type === 'light') {
      return longValue;
    }

    return shortValue;
  }

  if (size === 'extra-large' || size === 'large') {
    return longValue;
  } else if (size === 'medium') {
    return mediumValue;
  }

  return shortValue;
};

<State
  initialState={{
    placement: 'top',
    size: 'default',
    hasArrow: true,
    delayMS: 500,
    isVisible: true
  }}
>
  {(state, setState) => (
    <Grid>
      <Row>
        <Col md={5}>
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
              <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
                <SelectField>
                  <SelectLabel>Size</SelectLabel>
                  <Select small>{state.size}</Select>
                </SelectField>
                <Menu small>
                  <Item value="default">default</Item>
                  <Item value="small">small</Item>
                  <Item value="medium">medium</Item>
                  <Item value="large">large</Item>
                  <Item value="extra-large">extra-large</Item>
                </Menu>
              </Dropdown>
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
            <StyledSpacer>
              <Field>
                <Toggle
                  checked={state.isVisible}
                  onChange={e => setState({ isVisible: e.target.checked })}
                >
                  <Label>Force visibility</Label>
                </Toggle>
              </Field>
            </StyledSpacer>
            <StyledSpacer>
              <Field>
                <Label>Delay ({state.delayMS} ms)</Label>
                <Range
                  step={50}
                  min={100}
                  max={1000}
                  value={state.delayMS}
                  disabled={state.isVisible}
                  onChange={event => setState({ delayMS: parseInt(event.target.value) })}
                />
              </Field>
            </StyledSpacer>
            {state.size !== 'default' && (
              <StyledSpacer>
                <Alert type="warning">
                  <AlertTitle>Size warning</AlertTitle>
                  Although small, light tooltips and large, dark tooltips are supported in code, they
                  go against Garden's usage guidelines. Please don't use this.
                </Alert>
              </StyledSpacer>
            )}
          </Well>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Tooltip
                content={
                  <>
                    <Title>Dark Tooltip</Title>
                    <Paragraph>{retrieveTooltipContent(state.size, 'dark')}</Paragraph>
                  </>
                }
                hasArrow={state.hasArrow}
                placement={state.placement}
                size={state.size === 'default' ? undefined : state.size}
                delayMilliseconds={state.delayMS}
                isVisible={state.isVisible ? true : undefined}
              >
                <Button>Default tooltip</Button>
              </Tooltip>
            </Col>
            <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Tooltip
                content={
                  <>
                    <Title>Light Tooltip</Title>
                    <Paragraph>{retrieveTooltipContent(state.size, 'light')}</Paragraph>
                  </>
                }
                hasArrow={state.hasArrow}
                placement={state.placement}
                size={state.size === 'default' ? undefined : state.size}
                type="light"
                isVisible={state.isVisible ? true : undefined}
                delayMilliseconds={state.delayMS}
              >
                <Button>Light tooltip</Button>
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  )}
</State>;
```
