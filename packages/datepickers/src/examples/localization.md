The `<Datepicker>` supports all [date-fns locales](https://date-fns.org/v2.0.0-beta.2/docs/I18n).

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
const arLocale = require('date-fns/locale/ar-SA');
const enLocale = require('date-fns/locale/en-US');
const enGbLocale = require('date-fns/locale/en-GB');
const esLocale = require('date-fns/locale/es');
const jaLocale = require('date-fns/locale/ja');
const zhLocale = require('date-fns/locale/zh-CN');

const locales = [
  {
    value: arLocale,
    label: 'Arabic (ar-SA)'
  },
  {
    value: enLocale,
    label: 'English (en-US)'
  },
  {
    value: enGbLocale,
    label: 'English (en-GB)'
  },
  {
    value: esLocale,
    label: 'Spanish (es)'
  },
  {
    value: jaLocale,
    label: 'Japanese (ja)'
  },
  {
    value: zhLocale,
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
