The `Tag` component exposes a variety of styling options needed to support
badges, pills, and tags. Use pill or round class modifiers to shape a tag.
Round tags are intended to contain a minimal number of characters. A
`Tag.Avatar` may receive an `svg` or `img` element, but will apply styling to
any element provided. A `Tag.Avatar` will be hidden when used within a small
`Tag`. The `Tag.Close` component is a `<div>` rather than a `<button>`,
helping to enforce that the container element should receive focus.

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
  avatar: false,
  close: false,
  focused: false,
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
              avatar: shape === 'round' ? false : state.avatar,
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
            disabled={state.shape === 'round'}
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
        <Field>
          <Toggle
            checked={state.focused}
            onChange={event => setState({ focused: event.target.checked })}
          >
            <Label style={{ marginTop: 8 }}>Focused</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col alignSelf="center">
      <Tag
        focused={state.focused}
        hue={state.hue === 'default' ? null : state.hue}
        pill={state.shape === 'pill'}
        round={state.shape === 'round'}
        size={state.size}
        onClick={() => setState({ focused: true })}
      >
        {state.avatar && (
          <Tag.Avatar>
            <img src={`images/avatar-${Math.floor(Math.random() * 5 + 1)}.png`} />
          </Tag.Avatar>
        )}
        {state.text}
        {state.close && <Tag.Close onClick={() => alert(`Delete "${state.text}" tag`)} />}
      </Tag>
    </Col>
  </Row>
</Grid>;
```
