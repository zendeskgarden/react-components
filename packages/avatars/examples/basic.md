Along with a child `<img>`, avatars also support the display of a single
child `<svg>` icon or `<Avatar.Text>` component. In both of the latter cases,
the `backgroundColor` of the `<Avatar>` must be set to override the browser's
"transparent" default. Optionally, a `foregroundColor` (default "white") prop
may be set to alter the color of the child `<svg>` or `<Avatar.Text>`. Note
that a `surfaceColor` (default "white") prop should be used on `<Avatar>`
components to ensure internal status rings blend with current background
color.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const { Radio, Field, Input, Label, Range } = require('@zendeskgarden/react-forms/src');
const { LG } = require('@zendeskgarden/react-typography/src');

const UserIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;
const ZendeskIcon = require('@zendeskgarden/svg-icons/src/26/zendesk.svg').default;

initialState = {
  size: 'medium',
  badge: 0,
  surfaceColor: '#ffffff',
  backgroundColor: PALETTE.kale[800],
  foregroundColor: '#ffffff'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField>
            <SelectLabel>Size</SelectLabel>
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="doubleextrasmall">doubleextrasmall</Item>
            <Item value="extrasmall">extrasmall</Item>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Label>Status</Label>
        </Field>
        <Field>
          <Radio
            checked={!state.status}
            name="status"
            value={undefined}
            onChange={event => setState({ status: event.target.value })}
          >
            <Label>None</Label>
          </Radio>
        </Field>
        <Field>
          <Radio
            name="status"
            value="away"
            onChange={event => setState({ status: event.target.value })}
          >
            <Label>Away</Label>
          </Radio>
        </Field>
        <Field>
          <Radio
            name="status"
            value="available"
            onChange={event => setState({ status: event.target.value })}
          >
            <Label>Available</Label>
          </Radio>
        </Field>
        <Field className="u-mt-xs">
          <Label>Badge</Label>
          <Range
            max={10}
            onChange={event => setState({ badge: parseInt(event.target.value, 10) })}
            value={state.badge}
          />
        </Field>
        <Field className="u-mt-xs">
          <Label>Surface</Label>
          <Input
            isCompact
            type="color"
            value={state.surfaceColor}
            onChange={event => setState({ surfaceColor: event.target.value })}
          />
        </Field>
        <Field className="u-mt-xs">
          <Label>Background</Label>
          <Input
            isCompact
            type="color"
            value={state.backgroundColor}
            onChange={event => setState({ backgroundColor: event.target.value })}
          />
        </Field>
        <Field className="u-mt-xs">
          <Label>Foreground</Label>
          <Input
            isCompact
            type="color"
            value={state.foregroundColor}
            onChange={event => setState({ foregroundColor: event.target.value })}
          />
        </Field>
      </Well>
    </Col>
    <Col size="1">
      <Row style={{ height: '10%' }}></Row>
      <Row alignItems="center" style={{ height: '30%' }}>
        <Col style={{ textAlign: 'center' }}>
          <LG>Icon</LG>
        </Col>
      </Row>
      <Row alignItems="center" style={{ height: '30%' }}>
        <Col style={{ textAlign: 'center' }}>
          <LG>Image</LG>
        </Col>
      </Row>
      <Row alignItems="center" style={{ height: '30%' }}>
        <Col style={{ textAlign: 'center' }}>
          <LG>Text</LG>
        </Col>
      </Row>
    </Col>
    <Col>
      <Row style={{ height: '10%' }}>
        <Col style={{ textAlign: 'center' }}>
          <LG>Default</LG>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <LG>System</LG>
        </Col>
      </Row>
      <Row alignItems="center" style={{ backgroundColor: state.surfaceColor, height: '30%' }}>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={state.size}
            status={state.status}
            badge={state.badge === 0 ? undefined : state.badge > 9 ? '9+' : state.badge}
            surfaceColor={state.surfaceColor}
            backgroundColor={state.backgroundColor}
            foregroundColor={state.foregroundColor}
          >
            <UserIcon role="img" aria-label="Example SVG" />
          </Avatar>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={state.size}
            status={state.status}
            badge={state.badge === 0 ? undefined : state.badge > 9 ? '9+' : state.badge}
            surfaceColor={state.surfaceColor}
            backgroundColor={state.backgroundColor}
            foregroundColor={state.foregroundColor}
            isSystem
          >
            <ZendeskIcon role="img" aria-label="Zendesk" />
          </Avatar>
        </Col>
      </Row>
      <Row alignItems="center" style={{ backgroundColor: state.surfaceColor, height: '30%' }}>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={state.size}
            status={state.status}
            badge={state.badge === 0 ? undefined : state.badge > 9 ? '9+' : state.badge}
            surfaceColor={state.surfaceColor}
          >
            <img alt="" src={`images/avatar-3.png`} />
          </Avatar>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={state.size}
            status={state.status}
            badge={state.badge === 0 ? undefined : state.badge > 9 ? '9+' : state.badge}
            surfaceColor={state.surfaceColor}
            isSystem
          >
            <img alt="" src={`images/system.png`} />
          </Avatar>
        </Col>
      </Row>
      <Row alignItems="center" style={{ backgroundColor: state.surfaceColor, height: '30%' }}>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={state.size}
            status={state.status}
            badge={state.badge === 0 ? undefined : state.badge > 9 ? '9+' : state.badge}
            surfaceColor={state.surfaceColor}
            backgroundColor={state.backgroundColor}
            foregroundColor={state.foregroundColor}
          >
            <Avatar.Text>G</Avatar.Text>
          </Avatar>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={state.size}
            status={state.status}
            badge={state.badge === 0 ? undefined : state.badge > 9 ? '9+' : state.badge}
            surfaceColor={state.surfaceColor}
            backgroundColor={state.backgroundColor}
            foregroundColor={state.foregroundColor}
            isSystem
          >
            <Avatar.Text>ZD</Avatar.Text>
          </Avatar>
        </Col>
      </Row>
    </Col>
  </Row>
</Grid>;
```

### Accessibility

Ensure that all child images include an `alt` description. Similarly, ensure
that all child SVGs include `role="img"` with an `aria-label` description. By
default, the `Avatar` is rendered with `aria-atomic="true"` and
`aria-live="polite"`. Whenever the `badge` prop changes, these ARIA settings
result in VoiceOver reading out the image's `alt` (or SVG's `aria-label`)
description followed by the badge count. You may need to override with an
improved implementation for your use-case.
