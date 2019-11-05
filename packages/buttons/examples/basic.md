### Buttons

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
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
  size: 'medium',
  text: 'Test Button'
};

<Grid>
  <Row>
    <Col>
      <Well recessed style={{ width: 300 }}>
        <Field>
          <Label>Text</Label>
          <Input
            small
            value={state.text}
            onChange={event => setState({ text: event.target.value })}
          />
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.primary}
            onChange={event => setState({ primary: event.target.checked })}
          >
            <Label>Primary</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.danger}
            onChange={event => setState({ danger: event.target.checked })}
          >
            <Label>Danger</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle checked={state.pill} onChange={event => setState({ pill: event.target.checked })}>
            <Label>Pill</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.basic}
            onChange={event => setState({ basic: event.target.checked })}
          >
            <Label>Basic</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.focusInset}
            onChange={event => setState({ focusInset: event.target.checked })}
          >
            <Label>Focus inset</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle checked={state.link} onChange={event => setState({ link: event.target.checked })}>
            <Label>Link</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.stretched}
            onChange={event => setState({ stretched: event.target.checked })}
          >
            <Label>Stretched</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.disabled}
            onChange={event => setState({ disabled: event.target.checked })}
          >
            <Label>Disabled</Label>
          </Toggle>
        </Field>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Size</SelectLabel>
            <Select small>{state.size}</Select>
          </SelectField>
          <Menu small>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <Row>
        <Col>
          <Button
            primary={state.primary}
            danger={state.danger}
            pill={state.pill}
            basic={state.basic}
            focusInset={state.focusInset}
            link={state.link}
            stretched={state.stretched}
            disabled={state.disabled}
            size={state.size}
          >
            {state.text || '\u00A0'}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup>
            <Button
              primary={state.primary}
              danger={state.danger}
              pill={state.pill}
              basic={state.basic}
              focusInset={state.focusInset}
              link={state.link}
              stretched={state.stretched}
              disabled={state.disabled}
              size={state.size}
              value="one"
            >
              {state.text || '\u00A0'}
            </Button>
            <Button
              primary={state.primary}
              danger={state.danger}
              pill={state.pill}
              basic={state.basic}
              focusInset={state.focusInset}
              link={state.link}
              stretched={state.stretched}
              disabled={state.disabled}
              size={state.size}
              value="two"
            >
              {state.text || '\u00A0'}
            </Button>
            <Button
              primary={state.primary}
              danger={state.danger}
              pill={state.pill}
              basic={state.basic}
              focusInset={state.focusInset}
              link={state.link}
              stretched={state.stretched}
              disabled={state.disabled}
              size={state.size}
              value="three"
            >
              {state.text || '\u00A0'}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Col>
  </Row>
</Grid>;
```

### Button groups

```jsx
```
