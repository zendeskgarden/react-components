```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Tag } = require('@zendeskgarden/react-tags/src');
const {
  Toggle,
  Field: FormField,
  Label: FormLabel,
  Hint: FormHint,
  Range
} = require('@zendeskgarden/react-forms/src');
const GroupIcon = require('@zendeskgarden/svg-icons/src/16/user-group-stroke.svg').default;
const SearchIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;

const StyledSpacer = styled.div`
  margin-top: ${props => props.theme.space.xs};
`;

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

initialState = {
  regularWeightLabel: false,
  showHint: true,
  isCompact: false,
  isBare: false,
  focusInset: false,
  disabled: false,
  message: true,
  width: 100,
  validation: 'none',
  showStart: false
};

<Grid>
  <Row>
    <Col size={4}>
      <Well isRecessed>
        <FormField>
          <Toggle
            checked={state.regularWeightLabel}
            onChange={e => setState({ regularWeightLabel: e.target.checked })}
          >
            <FormLabel>Regular weight label</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle checked={state.showHint} onChange={e => setState({ showHint: e.target.checked })}>
            <FormLabel>Hint</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={state.isCompact}
            onChange={e => setState({ isCompact: e.target.checked })}
          >
            <FormLabel>Compact</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle checked={state.isBare} onChange={e => setState({ isBare: e.target.checked })}>
            <FormLabel>Bare</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={state.focusInset}
            onChange={e => setState({ focusInset: e.target.checked })}
          >
            <FormLabel>Focus inset</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle checked={state.disabled} onChange={e => setState({ disabled: e.target.checked })}>
            <FormLabel>Disabled</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle checked={state.message} onChange={e => setState({ message: e.target.checked })}>
            <FormLabel>Message</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={!!state.showStart}
            onChange={event => setState({ showStart: event.target.checked })}
          >
            <FormLabel>Start Icon</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <Dropdown selectedItem={state.validation} onSelect={validation => setState({ validation })}>
          <Field>
            <Label>Validation</Label>
            <Select isCompact>{state.validation}</Select>
          </Field>
          <Menu isCompact>
            <Item value="none">none</Item>
            <Item value="success">success</Item>
            <Item value="warning">warning</Item>
            <Item value="error">error</Item>
          </Menu>
        </Dropdown>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={!!state.inline}
            onChange={event => setState({ inline: event.target.checked })}
          >
            <FormLabel>Inline</FormLabel>
            <FormHint>See example code for inline styling overrides</FormHint>
          </Toggle>
        </FormField>
      </Well>
    </Col>
    <Col size={8}>
      <div style={{ width: `${state.width}%` }}>
        <Dropdown>
          <StyledField>
            <StyledLabel isRegular={state.regularWeightLabel}>Select dropdown</StyledLabel>
            {state.showHint && <StyledHint>Hint</StyledHint>}
            <Select
              isCompact={state.isCompact}
              isBare={state.isBare}
              focusInset={state.focusInset}
              disabled={state.disabled}
              validation={state.validation !== 'none' ? state.validation : undefined}
              start={state.showStart ? <GroupIcon /> : undefined}
            >
              Veggies es bonus vobis
            </Select>
            {state.message && (
              <StyledMessage
                validation={state.validation !== 'none' ? state.validation : undefined}
              >
                message
              </StyledMessage>
            )}
          </StyledField>
          <Menu isCompact={state.isCompact}>
            <Item disabled>Mock dropdown with no selection logic</Item>
          </Menu>
        </Dropdown>
        <StyledSpacer />
        <Dropdown>
          <StyledField>
            <StyledLabel isRegular={state.regularWeightLabel}>Autocomplete dropdown</StyledLabel>
            {state.showHint && <StyledHint>Hint</StyledHint>}
            <Autocomplete
              isCompact={state.isCompact}
              isBare={state.isBare}
              focusInset={state.focusInset}
              disabled={state.disabled}
              validation={state.validation !== 'none' ? state.validation : undefined}
              start={state.showStart ? <SearchIcon /> : undefined}
            >
              Veggies es bonus vobis
            </Autocomplete>
            {state.message && (
              <StyledMessage
                validation={state.validation !== 'none' ? state.validation : undefined}
              >
                message
              </StyledMessage>
            )}
          </StyledField>
          <Menu isCompact={state.isCompact}>
            <Item disabled>Mock dropdown with no selection logic</Item>
          </Menu>
        </Dropdown>
        <StyledSpacer />
        <Dropdown
          selectedItems={[
            'veggies es bonus',
            'shallot courgette tatsoi',
            'beet greens corn soko endive',
            'cauliflower',
            'turnip yarrow ricebean rutabaga'
          ]}
        >
          <StyledField>
            <StyledLabel isRegular={state.regularWeightLabel}>Multiselect dropdown</StyledLabel>
            {state.showHint && <StyledHint>Hint</StyledHint>}
            <Multiselect
              isCompact={state.isCompact}
              isBare={state.isBare}
              focusInset={state.focusInset}
              disabled={state.disabled}
              validation={state.validation !== 'none' ? state.validation : undefined}
              renderItem={({ value, removeValue }) => (
                <Tag size={state.isCompact ? 'medium' : 'large'} disabled={state.disabled}>
                  <span>{value}</span>
                </Tag>
              )}
            />
            {state.message && (
              <StyledMessage
                validation={state.validation !== 'none' ? state.validation : undefined}
              >
                message
              </StyledMessage>
            )}
          </StyledField>
          <Menu isCompact={state.isCompact}>
            <Item disabled>Mock dropdown with no selection logic</Item>
          </Menu>
        </Dropdown>
      </div>
      <StyledSpacer />
      <FormField>
        <Range
          aria-label="Example width"
          onChange={event => setState({ width: event.target.value })}
          style={{ marginTop: 8 }}
          value={state.width}
        />
      </FormField>
    </Col>
  </Row>
</Grid>;
```
