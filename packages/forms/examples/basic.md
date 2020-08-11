### Text inputs

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
const StartIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;
const EndIcon = require('@zendeskgarden/svg-icons/src/16/shield-stroke.svg').default;

initialState = {
  hint: true,
  message: true
};

const StyledField = styled(Field)`
  display: ${state.inline && 'flex'};
  align-items: ${state.inline && 'center'};
`;

const StyledHint = styled(Hint)`
  display: ${state.inline && 'inline'};
  margin-${props => (props.theme.rtl ? 'left' : 'right')}:
    ${props => state.inline && props.theme.space.sm};
`;

const StyledLabel = styled(Label)`
  margin-${props => (props.theme.rtl ? 'left' : 'right')}:
    ${props => state.inline && props.theme.space.sm};
`;

const StyledMessage = styled(Message)`
  margin-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => state.inline && props.theme.space.sm};
`;

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <Field>
          <Toggle
            checked={!!state.regular}
            onChange={event => setState({ regular: event.target.checked })}
          >
            <Label>Regular weight label</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle checked={state.hint} onChange={event => setState({ hint: event.target.checked })}>
            <Label>Hint</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ compact: event.target.checked })}>
            <Label>Compact</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ bare: event.target.checked })}>
            <Label>Bare</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ focusInset: event.target.checked })}>
            <Label>Focus inset</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ disabled: event.target.checked })}>
            <Label>Disabled</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ placeholder: event.target.checked })}>
            <Label>Placeholder</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ resizable: event.target.checked })}>
            <Label>Resizable textarea</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.message}
            onChange={event => setState({ message: event.target.checked })}
          >
            <Label>Message</Label>
          </Toggle>
        </Field>
        <Dropdown
          selectedItem={state.validation}
          onSelect={validation =>
            validation === '' ? setState({ validation: null }) : setState({ validation })
          }
        >
          <SelectField className="u-mt-xs">
            <SelectLabel>Validation</SelectLabel>
            <Select isCompact>{state.validation || 'none'}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="">none</Item>
            <Item value="success">success</Item>
            <Item value="warning">warning</Item>
            <Item value="error">error</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Toggle
            checked={!!state.inline}
            onChange={event => setState({ inline: event.target.checked })}
          >
            <Label>Inline</Label>
            <Hint>See example code for inline styling overrides</Hint>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <StyledField>
        <StyledLabel isRegular={state.regular}>Input</StyledLabel>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <Input
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          placeholder={state.placeholder && 'placeholder'}
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
        />
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
      <StyledField className="u-mt-sm">
        <StyledLabel isRegular={state.regular}>Textarea</StyledLabel>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <Textarea
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          isResizable={state.resizable}
          placeholder={state.placeholder && 'placeholder'}
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
          minRows={3}
        />
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
      <StyledField className="u-mt-sm">
        <StyledLabel isRegular={state.regular}>MediaInput</StyledLabel>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <MediaInput
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          placeholder={state.placeholder && 'placeholder'}
          validation={state.validation}
          wrapperProps={{ style: state.inline ? { width: 'auto', margin: 0 } : {} }}
          start={<StartIcon />}
          end={<EndIcon />}
        />
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
      <StyledField className="u-mt-sm">
        <StyledLabel isRegular={state.regular}>FauxInput</StyledLabel>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <FauxInput
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
        >
          {state.placeholder && 'placeholder'}
        </FauxInput>
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
    </Col>
  </Row>
</Grid>;
```

### Select (native)

Used in scenarios where the [Dropdown
Select](https://zendeskgarden.github.io/react-components/dropdowns/#select-usage)
component is not the right fit.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Select: SelectInput,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const StartIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;
const EndIcon = require('@zendeskgarden/svg-icons/src/16/shield-stroke.svg').default;

initialState = {
  hint: true,
  message: true
};

const StyledField = styled(Field)`
  display: ${state.inline && 'flex'};
  align-items: ${state.inline && 'center'};
`;

const StyledHint = styled(Hint)`
  display: ${state.inline && 'inline'};
  margin-${props => (props.theme.rtl ? 'left' : 'right')}:
    ${props => state.inline && props.theme.space.sm};
`;

const StyledLabel = styled(Label)`
  margin-${props => (props.theme.rtl ? 'left' : 'right')}:
    ${props => state.inline && props.theme.space.sm};
`;

const StyledMessage = styled(Message)`
  margin-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => state.inline && props.theme.space.sm};
`;

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <Field>
          <Toggle
            checked={!!state.regular}
            onChange={event => setState({ regular: event.target.checked })}
          >
            <Label>Regular weight label</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle checked={state.hint} onChange={event => setState({ hint: event.target.checked })}>
            <Label>Hint</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ compact: event.target.checked })}>
            <Label>Compact</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ bare: event.target.checked })}>
            <Label>Bare</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ focusInset: event.target.checked })}>
            <Label>Focus inset</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ disabled: event.target.checked })}>
            <Label>Disabled</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.message}
            onChange={event => setState({ message: event.target.checked })}
          >
            <Label>Message</Label>
          </Toggle>
        </Field>
        <Dropdown
          selectedItem={state.validation}
          onSelect={validation =>
            validation === '' ? setState({ validation: null }) : setState({ validation })
          }
        >
          <SelectField className="u-mt-xs">
            <SelectLabel>Validation</SelectLabel>
            <SelectInput isCompact>{state.validation || 'none'}</SelectInput>
          </SelectField>
          <Menu isCompact>
            <Item value="">none</Item>
            <Item value="success">success</Item>
            <Item value="warning">warning</Item>
            <Item value="error">error</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Toggle
            checked={!!state.inline}
            onChange={event => setState({ inline: event.target.checked })}
          >
            <Label>Inline</Label>
            <Hint>See example code for inline styling overrides</Hint>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <StyledField className="u-mt-sm">
        <StyledLabel isRegular={state.regular}>Select</StyledLabel>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <Select
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
        >
          <option>Option one</option>
          <option>Option two</option>
          <option>Option three</option>
        </Select>
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
    </Col>
  </Row>
</Grid>;
```

### Radio, Checkbox, and Toggle inputs

The `Label`-as-child component layout for Garden checkbox inputs allows
custom styling to be applied to the label's `::before` psuedo-element and
keeps the native `input` intact. A label `hidden` prop may be applied when
the default layout is not desired (consider [iOS-style
switches](https://developer.apple.com/design/human-interface-guidelines/ios/controls/switches/)
where text precedes the control). In these cases, the associated `Label`
remains accessible to screen readers and must be populated with descriptive
text.

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

initialState = {
  hidden: false,
  hint: true,
  message: true,
  indeterminate: false
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 360 }}>
        <Field>
          <Toggle
            checked={state.indeterminate}
            onChange={event => setState({ indeterminate: event.target.checked })}
          >
            <Label>Indeterminate checkbox</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={!!state.regular}
            onChange={event => setState({ regular: event.target.checked })}
          >
            <Label>Regular weight label</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.hidden}
            onChange={event => setState({ hidden: event.target.checked })}
          >
            <Label>Hidden label</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle onChange={event => setState({ disabled: event.target.checked })}>
            <Label>Disabled</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle checked={state.hint} onChange={event => setState({ hint: event.target.checked })}>
            <Label>Hint</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.message}
            onChange={event => setState({ message: event.target.checked })}
          >
            <Label>Message</Label>
          </Toggle>
        </Field>
        <Dropdown
          selectedItem={state.validation}
          onSelect={validation =>
            validation === '' ? setState({ validation: null }) : setState({ validation })
          }
        >
          <SelectField className="u-mt-xs">
            <SelectLabel>Validation</SelectLabel>
            <Select disabled={!state.message} isCompact>
              {state.validation || 'none'}
            </Select>
          </SelectField>
          <Menu isCompact>
            <Item value="">none</Item>
            <Item value="success">success</Item>
            <Item value="warning">warning</Item>
            <Item value="error">error</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <Field>
        <Checkbox disabled={state.disabled} indeterminate={state.indeterminate}>
          <Label hidden={state.hidden} isRegular={state.regular}>
            Checkbox
          </Label>
          {state.hint && <Hint>Hint</Hint>}
          {state.message && <Message validation={state.validation}>Message</Message>}
        </Checkbox>
      </Field>
      <div className="u-mt-sm" role="group" aria-label="radio">
        <Field>
          <Radio disabled={state.disabled} name="example">
            <Label hidden={state.hidden} isRegular={state.regular}>
              Radio
            </Label>
            {state.hint && <Hint>Hint</Hint>}
            {state.message && <Message validation={state.validation}>Message</Message>}
          </Radio>
        </Field>
        <Field className="u-mt-xxs">
          <Radio disabled={state.disabled} name="example">
            <Label hidden={state.hidden} isRegular={state.regular}>
              Radio
            </Label>
            {state.hint && <Hint>Hint</Hint>}
            {state.message && <Message validation={state.validation}>Message</Message>}
          </Radio>
        </Field>
      </div>
      <Field className="u-mt-sm">
        <Toggle disabled={state.disabled}>
          <Label hidden={state.hidden} isRegular={state.regular}>
            Toggle
          </Label>
          {state.hint && <Hint>Hint</Hint>}
          {state.message && <Message validation={state.validation}>Message</Message>}
        </Toggle>
      </Field>
    </Col>
  </Row>
</Grid>;
```

### Range inputs

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

initialState = {
  hint: true,
  message: true,
  minValue: 0,
  maxValue: 100,
  step: 10
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
          <Toggle onChange={event => setState({ disabled: event.target.checked })}>
            <Label>Disabled</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle checked={state.hint} onChange={event => setState({ hint: event.target.checked })}>
            <Label>Hint</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.message}
            onChange={event => setState({ message: event.target.checked })}
          >
            <Label>Message</Label>
          </Toggle>
        </Field>
        <Dropdown
          selectedItem={state.validation}
          onSelect={validation =>
            validation === '' ? setState({ validation: null }) : setState({ validation })
          }
        >
          <SelectField className="u-mt-xs">
            <SelectLabel>Validation</SelectLabel>
            <Select disabled={!state.message} isCompact>
              {state.validation || 'none'}
            </Select>
          </SelectField>
          <Menu isCompact>
            <Item value="">none</Item>
            <Item value="success">success</Item>
            <Item value="warning">warning</Item>
            <Item value="error">error</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.step} onSelect={step => setState({ step })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Step</SelectLabel>
            <Select isCompact>{state.step}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value={1}>1</Item>
            <Item value={5}>5</Item>
            <Item value={10}>10</Item>
            <Item value={50}>50</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col>
      <Field>
        <Label>Range</Label>
        {state.hint && <Hint>Hint</Hint>}
        <Range disabled={state.disabled} step={state.step} />
        {state.message && <Message validation={state.validation}>Message</Message>}
      </Field>
      <Field className="u-mt-sm">
        <Label>MultiThumbRange</Label>
        {state.hint && <Hint>Hint</Hint>}
        <MultiThumbRange
          disabled={state.disabled}
          minValue={state.minValue}
          maxValue={state.maxValue}
          step={state.step}
          onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
        />
        {state.message && <Message validation={state.validation}>Message</Message>}
      </Field>
    </Col>
  </Row>
</Grid>;
```
