The `Tiles` component is implemented using the [W3C Radio Group pattern](https://www.w3.org/TR/wai-aria-practices/#radiobutton).
Each `Tile` may be treated as an individual radio input.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const ChevronIcon = require('@zendeskgarden/svg-icons/src/16/chevron-box-stroke.svg').default;
const CheckboxDoubleIcon = require('@zendeskgarden/svg-icons/src/16/check-box-double-stroke.svg')
  .default;
const TextIcon = require('@zendeskgarden/svg-icons/src/16/text-stroke.svg').default;
const MultilineIcon = require('@zendeskgarden/svg-icons/src/16/multiline-stroke.svg').default;
const CheckIcon = require('@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg').default;
const NumberIcon = require('@zendeskgarden/svg-icons/src/16/number-stroke.svg').default;
const DecimalIcon = require('@zendeskgarden/svg-icons/src/16/decimal-stroke.svg').default;
const CalendarIcon = require('@zendeskgarden/svg-icons/src/16/calendar-stroke.svg').default;
const CreditCardIcon = require('@zendeskgarden/svg-icons/src/16/credit-card-stroke.svg').default;
const AsterickIcon = require('@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg').default;

const items = [
  { value: 'dropdown', label: 'Dropdown', icon: <ChevronIcon /> },
  { value: 'multiselect', label: 'Multiselect', icon: <CheckboxDoubleIcon /> },
  { value: 'text', label: 'Text', icon: <TextIcon /> },
  { value: 'multiline', label: 'Multiline', icon: <MultilineIcon /> },
  { value: 'checkbox', label: 'Checkbox', icon: <CheckIcon /> },
  { value: 'numeric', label: 'Numeric', icon: <NumberIcon /> },
  { value: 'decimal', label: 'Decimal', icon: <DecimalIcon /> },
  { value: 'date', label: 'Date', icon: <CalendarIcon /> },
  { value: 'credit-card', label: 'Credit card', icon: <CreditCardIcon /> },
  { value: 'wildcard', label: 'Wildcard', icon: <AsterickIcon /> }
];

initialState = {
  isStacked: false,
  disabled: false
};

<div>
  <Well isRecessed className="u-mb">
    <Grid>
      <Row>
        <Col>
          <Field>
            <Toggle
              checked={!!state.isStacked}
              onChange={event => setState({ isStacked: event.target.checked })}
            >
              <Label>Stacked</Label>
            </Toggle>
          </Field>
        </Col>
        <Col>
          <Field>
            <Toggle
              checked={!!state.disabled}
              onChange={event => setState({ disabled: event.target.checked })}
            >
              <Label>Disabled</Label>
            </Toggle>
          </Field>
        </Col>
      </Row>
    </Grid>
  </Well>
  <Tiles name="example" aria-label="Example radio group selection" isStacked={state.isStacked}>
    <Grid>
      <Row>
        {items.map(item =>
          state.isStacked ? (
            <Col key={item.value} sm={12}>
              <Tiles.Tile value={item.value} disabled={state.disabled}>
                <Tiles.Icon>{item.icon}</Tiles.Icon>
                <Tiles.Label>{item.label}</Tiles.Label>
                <Tiles.Description>
                  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
                  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                </Tiles.Description>
              </Tiles.Tile>
            </Col>
          ) : (
            <Col key={item.value} xl={2} lg={3} md={4} xs={6}>
              <Tiles.Tile value={item.value} disabled={state.disabled}>
                <Tiles.Icon>{item.icon}</Tiles.Icon>
                <Tiles.Label>{item.label}</Tiles.Label>
              </Tiles.Tile>
            </Col>
          )
        )}
      </Row>
    </Grid>
  </Tiles>
</div>;
```
