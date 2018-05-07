### States

```jsx
<Grid columns={4} stretched>
  <Checkbox>
    <Label regular>Regular Label</Label>
  </Checkbox>
  <Checkbox checked onChange={() => console.log('checked value changed')}>
    <Label>Checked Label</Label>
  </Checkbox>
  <Checkbox>
    <Label hidden>Hidden Label</Label>
  </Checkbox>
  <Checkbox>
    <Label indeterminate>Indeterminate Label</Label>
  </Checkbox>
  <Checkbox>
    <Label hovered>Hovered Label</Label>
  </Checkbox>
  <Checkbox>
    <Label focused>Focused Label</Label>
  </Checkbox>
  <Checkbox disabled>
    <Label>Disabled Label</Label>
  </Checkbox>
</Grid>
```
