The `Tooltip` component acts as a high-abstraction API over the
[useTooltip()](https://www.npmjs.com/package/@zendeskgarden/container-tooltip)
hook.

All props passed to the root element are proxied onto the tooltip element.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Field, Label, Toggle } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  placement: 'top',
  showArrow: true,
  type: 'dark'
};

const StyledSpacer = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
`;

<Grid>
  <Row>
    <Col md={4}>
      <Well recessed>
        <StyledSpacer>
          <Dropdown selectedItem={state.placement} onSelect={placement => setState({ placement })}>
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
              <Item value="end-start">end-start</Item>
              <Item value="end-bottom">end-bottom</Item>
              <Item value="start">start</Item>
              <Item value="start-top">start-top</Item>
              <Item value="start-bottom">start-bottom</Item>
            </Menu>
          </Dropdown>
        </StyledSpacer>
        <StyledSpacer>
          <Field>
            <Toggle
              checked={state.showArrow}
              onChange={e => setState({ showArrow: e.target.checked })}
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
        showArrow={state.showArrow}
        placement={state.placement}
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
        showArrow={state.showArrow}
        placement={state.placement}
        type="light"
        initialIsVisible
      >
        <Button>Light tooltip</Button>
      </Tooltip>
    </Col>
  </Row>
</Grid>;
```
