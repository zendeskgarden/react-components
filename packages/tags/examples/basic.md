The following example provides controls that can be used to affect basic
`Tag` structure and styling. Please note the following:

- `round` tags are only meant to contain one or two characters (i.e. numbers)
- `round` tags do not display `Tag.Avatar` or `Tag.Close` components
- a `Tag.Avatar` is designed to contain one `img` or `svg` child
- a `Tag.Avatar` is not displayed in `small`-sized tags

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
const { Code } = require('@zendeskgarden/react-typography/src');

initialState = {
  hue: 'default',
  shape: 'default',
  size: 'medium',
  text: 'Test Tag'
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
        <Dropdown selectedItem={state.hue} onSelect={hue => setState({ hue })}>
          <SelectField>
            <SelectLabel>Hue</SelectLabel>
            <Select small>{state.hue}</Select>
          </SelectField>
          <Menu small maxHeight="240px">
            <Item value="default">default</Item>
            <Item value="grey">grey</Item>
            <Item value="blue">blue</Item>
            <Item value="kale">kale</Item>
            <Item value="red">red</Item>
            <Item value="green">green</Item>
            <Item value="yellow">yellow</Item>
            <Item value="fuschia">fuschia</Item>
            <Item value="pink">pink</Item>
            <Item value="crimson">crimson</Item>
            <Item value="orange">orange</Item>
            <Item value="lemon">lemon</Item>
            <Item value="lime">lime</Item>
            <Item value="mint">mint</Item>
            <Item value="teal">teal</Item>
            <Item value="azure">azure</Item>
            <Item value="royal">royal</Item>
            <Item value="purple">purple</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField>
            <SelectLabel>Size</SelectLabel>
            <Select small>{state.size}</Select>
          </SelectField>
          <Menu small>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
        <Dropdown
          selectedItem={state.shape}
          onSelect={shape =>
            setState({
              shape,
              text: shape === 'round' ? '8' : state.text
            })
          }
        >
          <SelectField>
            <SelectLabel>Shape</SelectLabel>
            <Select small>{state.shape}</Select>
          </SelectField>
          <Menu small>
            <Item value="default">default</Item>
            <Item value="pill">pill</Item>
            <Item value="round">round</Item>
          </Menu>
        </Dropdown>
        <Field>
          <Toggle
            checked={state.avatar}
            onChange={event => setState({ avatar: event.target.checked })}
          >
            <Label style={{ marginTop: 8 }}>
              Include <Code>Tag.Avatar</Code>
            </Label>
          </Toggle>
        </Field>
        <Field>
          <Toggle
            checked={state.close}
            onChange={event => setState({ close: event.target.checked })}
          >
            <Label style={{ marginTop: 8 }}>
              Include <Code>Tag.Close</Code>
            </Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col alignSelf="center">
      <Tag
        hue={state.hue === 'default' ? null : state.hue}
        isPill={state.shape === 'pill'}
        isRound={state.shape === 'round'}
        size={state.size}
        tabIndex={0}
      >
        {state.avatar && (
          <Tag.Avatar>
            <img alt="" src={`images/avatar-${Math.floor(Math.random() * 70 + 1)}.png`} />
          </Tag.Avatar>
        )}
        {state.text}
        {state.close && <Tag.Close onClick={() => alert(`Delete "${state.text}" tag`)} />}
      </Tag>
    </Col>
  </Row>
</Grid>;
```
