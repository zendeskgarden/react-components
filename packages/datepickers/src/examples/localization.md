The `<Datepicker>` supports all valid [Intl locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).

You are able to customize language, region, and calendar type with
a [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters).

```jsx
const { Field, Label, Hint, Input } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Menu,
  Select,
  Item,
  Label: DropdownLabel,
  Field: DropdownField,
  Hint: DropdownHint
} = require('@zendeskgarden/react-dropdowns/src');

const locales = [
  {
    value: 'ar-SA',
    label: 'Arabic (ar-SA)'
  },
  {
    value: 'en-US',
    label: 'English (en-US)'
  },
  {
    value: 'en-GB',
    label: 'English (en-GB)'
  },
  {
    value: 'es',
    label: 'Spanish (es)'
  },
  {
    value: 'ja',
    label: 'Japanese (ja)'
  },
  {
    value: 'zh-CH',
    label: 'Chinese [zh-CH]'
  }
];

initialState = {
  value: new Date(),
  locale: locales[0]
};

<Grid>
  <Row>
    <Col lg={4}>
      <Dropdown
        selectedItem={state.locale}
        onSelect={newLocale => setState({ locale: newLocale })}
        downshiftProps={{ itemToString: item => item && item.label }}
      >
        <DropdownField>
          <DropdownLabel>Locale</DropdownLabel>
          <DropdownHint>Using date-fns localization</DropdownHint>
          <Select>{state.locale.label}</Select>
        </DropdownField>
        <Menu>
          {locales.map(loc => (
            <Item key={loc.label} value={loc}>
              {loc.label}
            </Item>
          ))}
        </Menu>
      </Dropdown>
    </Col>
    <Col lg={8}>
      <Field>
        <Label>Localized date</Label>
        <Hint>Using date-fns locale</Hint>
        <Datepicker
          value={state.value}
          onChange={newDate => {
            setState({ value: newDate });
          }}
          locale={state.locale.value}
        >
          <Input />
        </Datepicker>
      </Field>
    </Col>
  </Row>
</Grid>;
```
