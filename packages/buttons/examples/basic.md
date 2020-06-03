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
  <Row alignItems="center">
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
          <Label>Text</Label>
          <Input
            isCompact
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
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <Button
        isPrimary={state.primary}
        isDanger={state.danger}
        isPill={state.pill}
        isBasic={state.basic}
        focusInset={state.focusInset}
        isLink={state.link}
        isStretched={state.stretched}
        disabled={state.disabled}
        size={state.size}
      >
        {state.text || '\u00A0'}
      </Button>
    </Col>
  </Row>
</Grid>;
```

### Anchors

The `Anchor` component is a styled `<a>` tag. It accepts all standard anchor
props and should only be used for navigating to a resource. If you need a
`<button>` that has anchor styling, use the `<Button isLink>anchor-styled button</Button>` component.

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
const { SM, MD, LG, XL, XXL, XXXL } = require('@zendeskgarden/react-typography');
const Icon = require('@zendeskgarden/svg-icons/src/16/paperclip.svg').default;

const Typography = ({ size, children, ...props }) => {
  switch (size) {
    case 'SM':
      return <SM {...props}>{children}</SM>;
    case 'MD':
      return <MD {...props}>{children}</MD>;
    case 'LG':
      return <LG {...props}>{children}</LG>;
    case 'XL':
      return <XL {...props}>{children}</XL>;
    case 'XXL':
      return <XXL {...props}>{children}</XXL>;
    case 'XXXL':
      return <XXXL {...props}>{children}</XXXL>;
  }
};

initialState = {
  danger: false,
  size: 'MD',
  text: 'Test Anchor'
};

<Grid>
  <Row alignItems="center">
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
          <Label>Text</Label>
          <Input
            isCompact
            value={state.text}
            onChange={event => setState({ text: event.target.value })}
          />
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.external}
            onChange={event => setState({ external: event.target.checked })}
          >
            <Label>External</Label>
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
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Size</SelectLabel>
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="SM">SM</Item>
            <Item value="MD">MD</Item>
            <Item value="LG">LG</Item>
            <Item value="XL">XL</Item>
            <Item value="XXL">XXL</Item>
            <Item value="XXXL">XXXL</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <Typography as="p" size={state.size}>
        <Anchor
          href={state.external ? 'https://www.zendesk.com' : null}
          isDanger={state.danger}
          isExternal={state.external}
          target={state.external ? '_blank' : null}
        >
          {state.text}
        </Anchor>
      </Typography>
    </Col>
  </Row>
</Grid>;
```

### Icons

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const { LG } = require('@zendeskgarden/react-typography/src');
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;
const AttachmentIcon = require('@zendeskgarden/svg-icons/src/16/paperclip.svg').default;

initialState = {
  size: 'medium'
};

<Grid>
  <Row alignItems="center">
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
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
          <Toggle
            checked={state.focusInset}
            onChange={event => setState({ focusInset: event.target.checked })}
          >
            <Label>Focus inset</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.rotated}
            onChange={event => setState({ rotated: event.target.checked })}
          >
            <Label>Rotated</Label>
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
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <LG className="u-mb-xs">Icon buttons</LG>
      <IconButton
        aria-label="icon"
        isPrimary={state.primary}
        isDanger={state.danger}
        isRotated={state.rotated}
        focusInset={state.focusInset}
        disabled={state.disabled}
        size={state.size}
      >
        <SettingsIcon />
      </IconButton>
      <span className="u-mh" />
      <IconButton
        aria-label="icon"
        isPill={false}
        isPrimary={state.primary}
        isDanger={state.danger}
        isRotated={state.rotated}
        focusInset={state.focusInset}
        disabled={state.disabled}
        size={state.size}
      >
        <AttachmentIcon />
      </IconButton>
      <LG className="u-mt u-mb-xs">Chevron button</LG>
      <ChevronButton
        aria-label="chevron"
        isBasic={state.primary}
        isPrimary={state.primary}
        isDanger={state.danger}
        isRotated={state.rotated}
        focusInset={state.focusInset}
        disabled={state.disabled}
        size={state.size}
      />
    </Col>
  </Row>
</Grid>;
```

### Toggle Button

The following example demonstrates a [toggle button and toggle icon
button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Toggle_buttons).
Either click or use the keyboard to toggle each button's pressed state.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label } = require('@zendeskgarden/react-forms/src');
const Icon = require('@zendeskgarden/svg-icons/src/16/eye-stroke.svg').default;

initialState = {
  buttonPressed: false,
  iconButtonPressed: false
};

<Grid>
  <Row alignItems="center">
    <Col>
      <Well isRecessed style={{ width: 300 }}>
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
          <Toggle
            checked={state.basic}
            onChange={event => setState({ basic: event.target.checked })}
          >
            <Label>Basic</Label>
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
      </Well>
    </Col>
    <Col>
      <Row>
        <Col textAlign="center">
          <ToggleButton
            isPrimary={state.primary}
            isDanger={state.danger}
            isBasic={state.basic}
            isPressed={state.buttonPressed}
            disabled={state.disabled}
            onClick={event => setState({ buttonPressed: !state.buttonPressed })}
          >
            Toggle button
          </ToggleButton>
        </Col>
        <Col textAlign="center">
          <ToggleIconButton
            aria-label="icon"
            isPrimary={state.primary}
            isDanger={state.danger}
            isBasic={state.basic}
            isPressed={state.iconButtonPressed}
            disabled={state.disabled}
            onClick={event => setState({ iconButtonPressed: !state.iconButtonPressed })}
          >
            <Icon />
          </ToggleIconButton>
        </Col>
      </Row>
    </Col>
  </Row>
</Grid>;
```

### Groups

While split buttons are visually similar to button groups, it is important to
note that keyboard navigation is different for accessibility purposes. The
button group applies `role="group"` to the containing element and handles
keyboard navigation using the tab-to; cursor-through paradigm (a user tabs to
the group and uses arrow keys to navigate within the group). Because the
split button is a visual treatment for two separate buttons, a user simply
tabs to navigate between the primary and secondary actions.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const { LG } = require('@zendeskgarden/react-typography/src');

initialState = {
  size: 'medium'
};

<Grid>
  <Row alignItems="center">
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
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
            checked={state.disabled}
            onChange={event => setState({ disabled: event.target.checked })}
          >
            <Label>Disabled</Label>
          </Toggle>
        </Field>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Size</SelectLabel>
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <LG className="u-mb-xs">Split button</LG>
      <SplitButton>
        <Button
          isPrimary={state.primary}
          isDanger={state.danger}
          isPill={state.pill}
          disabled={state.disabled}
          size={state.size}
        >
          Test
        </Button>
        <ChevronButton
          aria-label="chevron"
          isPrimary={state.primary}
          isDanger={state.danger}
          isPill={state.pill}
          disabled={state.disabled}
          size={state.size}
        />
      </SplitButton>
      <LG className="u-mt u-mb-xs">Button Group</LG>
      <ButtonGroup>
        <Button
          isPrimary={state.primary}
          isDanger={state.danger}
          isPill={state.pill}
          disabled={state.disabled}
          size={state.size}
          value="one"
        >
          One
        </Button>
        <Button
          isPrimary={state.primary}
          isDanger={state.danger}
          isPill={state.pill}
          disabled={state.disabled}
          size={state.size}
          value="two"
        >
          Two
        </Button>
        <Button
          isPrimary={state.primary}
          isDanger={state.danger}
          isPill={state.pill}
          disabled={state.disabled}
          size={state.size}
          value="three"
        >
          Three
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
</Grid>;
```
