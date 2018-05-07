### States

```jsx
<Grid columns={4} stretched>
  <Radio>
    <Label regular>Regular Label</Label>
  </Radio>
  <Radio checked onChange={() => console.log('checked value changed')}>
    <Label>Checked Label</Label>
  </Radio>
  <Radio>
    <Label hidden>Hidden Label</Label>
  </Radio>
  <Radio>
    <Label hovered>Hovered Label</Label>
  </Radio>
  <Radio>
    <Label focused>Focused Label</Label>
  </Radio>
  <Radio disabled>
    <Label>Disabled Label</Label>
  </Radio>
</Grid>
```
