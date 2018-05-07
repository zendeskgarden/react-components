### States

```jsx
<Grid columns={4} stretched>
  <Toggle>
    <Label regular>Regular Label</Label>
  </Toggle>
  <Toggle checked onChange={() => console.log('checked value changed')}>
    <Label>Checked Label</Label>
  </Toggle>
  <Toggle>
    <Label hidden>Hidden Label</Label>
  </Toggle>
  <Toggle>
    <Label indeterminate>Indeterminate Label</Label>
  </Toggle>
  <Toggle>
    <Label hovered>Hovered Label</Label>
  </Toggle>
  <Toggle>
    <Label focused>Focused Label</Label>
  </Toggle>
  <Toggle disabled>
    <Label>Disabled Label</Label>
  </Toggle>
</Grid>
```
