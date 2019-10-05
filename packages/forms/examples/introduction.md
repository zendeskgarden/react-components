The `@zendeskgarden/react-forms` packages provides high-abstraction components to
help create consistent, accessible, and flexible form fields.

It provides dynamic styling and accessibility attributes from the [@zendeskgarden/container-field](https://www.npmjs.com/package/@zendeskgarden/container-field)
via the [React Context API](https://reactjs.org/docs/context.html).

### Customization and State Management

All components within this package spread their provided props to their respective DOM elements.
Each form field is backed by a standard `<input />` element and can be controlled in the same way.

```jsx static
const Example = () => {
  const [value, setValue] = React.useState('');

  return (
    <Field>
      <Label data-custom-value="this-is-available">Custom Label</Label>
      <Input value={value} onChange={e => setValue(e.target.value)} />
    </Field>
  );
};
```

### Common Components

A common set of core components provide accessibility attributes and dynamically change
styling based on which form field they are rendered within.

- `Field`
  - Provides all accessibility attributes via the Context API.
- `Label`
  - Modifies styling depending on rendering location within other fields.
- `Hint`
  - Modifies styling depending on rendering location within other fields.
- `Message`
  - Modifies styling depending on rendering location within other fields.

### Form Fields

- `Input`
  - Implemented with `<input />`
- `Textarea`
  - Implemented with `<textarea />`
- `Checkbox`
  - Implemented with `<input type="checkbox" />`
- `Toggle`
  - Implemented with `<input type="checkbox" />`
- `Radio`
  - Implemented with `<input type="radio" />`

### Other Components

This package also includes several non-standard form fields.

- `FauxInput`
  - A `<div>` styled as an `Input`. Useful for custom use-cases that include non-editable content.
- `MediaInput`
  - An `Input` that allows RTL-aware `start` and `end` icons and content to be provided.
