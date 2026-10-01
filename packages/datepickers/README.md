# @zendeskgarden/react-datepickers [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-datepickers)](https://www.npmjs.com/package/@zendeskgarden/react-datepickers)

This package includes components relating to datepickers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-datepickers

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

The `<DatePicker>` component allows users to select a
date with a dropdown selection or a variety of localizable
text formats. Internally, the `<DatePicker>` uses [date-fns](https://date-fns.org/)
for it's date calculations and the [Intl.DateTimeFormat utility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
for localization support.

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Input } from '@zendeskgarden/react-forms';
import { DatePicker } from '@zendeskgarden/react-datepickers';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Field>
    <Field.Label>Example datepicker</Field.Label>
    <DatePicker value={new Date()} onChange={selectedDate => console.log(selectedDate)}>
      <Input />
    </DatePicker>
  </Field>
</ThemeProvider>;
```

### Date format hint

Users can type a date as well as pick one, so tell them which format to use
with a `Field.Hint`. Inside a `Field`, the hint is linked to the input through
`aria-describedby`, so screen readers announce it along with the label:

```jsx
<Field>
  <Field.Label>Start date</Field.Label>
  <Field.Hint>Use M/D/YYYY format</Field.Hint>
  <DatePicker value={new Date()} onChange={selectedDate => console.log(selectedDate)}>
    <Input />
  </DatePicker>
</Field>
```

For a `DatePickerRange`, give each field its own hint, or put a shared hint on
the enclosing `Fieldset` and reference its `id` from each input's
`aria-describedby`.

### Sizing

By default, `<DatePicker>` groups its input with a calendar button, and that
group fills the width of its container. Width styles on the input itself don't
size the date picker, so size it through its layout container instead, e.g. a
`Grid` column:

```jsx
import { Grid } from '@zendeskgarden/react-grid';

<Grid>
  <Grid.Row>
    <Grid.Col sm={4}>
      <Field>
        <Field.Label>Example datepicker</Field.Label>
        <DatePicker value={new Date()} onChange={selectedDate => console.log(selectedDate)}>
          <Input />
        </DatePicker>
      </Field>
    </Grid.Col>
  </Grid.Row>
</Grid>;
```

For an input that provides its own styling, set `hasTrigger={false}`. The input
then renders exactly as provided, without the button or its group, and still
opens the calendar when clicked or on <kbd>Down Arrow</kbd>.

### Using a `MediaInput`

Prefer the default calendar button to a `MediaInput` with its own calendar
icon. If you do use one, `DatePicker` only sees the `<input>` inside it, so it
needs some help:

- `refKey="wrapperRef"` positions the calendar against the `MediaInput`'s
  outer box rather than the `<input>` inside it.
- `wrapperProps` handlers make a click on the icon (or the padding around the
  `<input>`) behave like a click on the `<input>`, and keep pressing them from
  moving focus out of the field.

```jsx
import { Field, MediaInput } from '@zendeskgarden/react-forms';
import CalendarIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';

const inputRef = useRef();

<Field>
  <Field.Label>Date</Field.Label>
  <DatePicker value={value} onChange={setValue} hasTrigger={false} refKey="wrapperRef">
    <MediaInput
      ref={inputRef}
      end={<CalendarIcon />}
      wrapperProps={{
        onMouseDown: e => {
          if (e.target !== inputRef.current) {
            e.preventDefault();
          }
        },
        onClick: e => {
          if (e.target !== inputRef.current) {
            inputRef.current?.click();
          }
        }
      }}
    />
  </DatePicker>
</Field>;
```
