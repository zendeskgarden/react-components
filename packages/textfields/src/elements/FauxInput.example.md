Many designs call for a _faux_ input. The `FauxInput` component is a `div` with default
input styling and managed focused/hovered states.

It is meant for inputs that must contain non-editable content (`MediaFigure` and `MultiSelect` usages)

```jsx
<FauxInput>
  <div tabIndex={0} style={{ outline: 'none' }}>
    This element isn't an input! (but it is focusable)
  </div>
</FauxInput>
```
