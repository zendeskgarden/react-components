```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Select,
  Field,
  Label,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  hue: 'grey',
  size: 'medium'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.hue} onSelect={hue => setState({ hue })}>
          <Field>
            <Label>Hue</Label>
            <Select isCompact>{state.hue}</Select>
          </Field>
          <Menu isCompact>
            <Item value="grey">grey (default)</Item>
            <Item value="green">green</Item>
            <Item value="yellow">yellow</Item>
            <Item value="red">red</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <Field className="u-mt-xs">
            <Label>Size</Label>
            <Select isCompact>{state.size}</Select>
          </Field>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium (default)</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col alignSelf="center">
      <Code hue={state.hue} size={state.size}>
        veggies es bonus vobis
      </Code>
    </Col>
  </Row>
</Grid>;
```
