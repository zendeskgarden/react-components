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
const SearchIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;
const ShieldIcon = require('@zendeskgarden/svg-icons/src/16/shield-stroke.svg').default;

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
  margin: ${props => state.inline && `0 ${props.theme.space.sm}`};
`;

const StyledMessage = styled(Message)`
  && {
    margin: ${props => state.inline && `0 ${props.theme.space.sm}`};
  }
`;

<Grid>
  <Row>
    <Col size="5">
      <Well recessed style={{ width: 300 }}>
        <Field>
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
          <Toggle onChange={event => setState({ resizable: event.target.checked })}>
            <Label>Resizable (textarea)</Label>
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
            <Select disabled={!state.message} small>
              {state.validation || 'none'}
            </Select>
          </SelectField>
          <Menu small>
            <Item value="">none</Item>
            <Item value="success">success</Item>
            <Item value="warning">warning</Item>
            <Item value="error">error</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.inline}
            onChange={event => setState({ inline: event.target.checked })}
          >
            <Label>Inline</Label>
            <Hint>See code for inline layout styling overrides</Hint>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <StyledField>
        <Label>Input</Label>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <Input
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          placeholder="placeholder"
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
        />
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
      <StyledField className="u-mt-sm">
        <Label>Textarea</Label>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <Textarea
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          isResizable={state.resizable}
          placeholder="placeholder"
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
        />
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
      <StyledField className="u-mt-sm">
        <Label>MediaInput</Label>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <MediaInput
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          placeholder="placeholder"
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
          start={<SearchIcon />}
          end={<ShieldIcon />}
        />
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
      <StyledField className="u-mt-sm">
        <Label>FauxInput</Label>
        {state.hint && <StyledHint>Hint</StyledHint>}
        <FauxInput
          disabled={state.disabled}
          focusInset={state.focusInset}
          isBare={state.bare}
          isCompact={state.compact}
          validation={state.validation}
          style={state.inline ? { width: 'auto', margin: 0 } : {}}
        >
          placeholder
        </FauxInput>
        {state.message && <StyledMessage validation={state.validation}>Message</StyledMessage>}
      </StyledField>
    </Col>
  </Row>
</Grid>;
```
