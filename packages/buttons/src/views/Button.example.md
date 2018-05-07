By default, the `<Button>` component contains an internal `KeyboardFocusContainer`
wrapper that applies focused styling _ONLY_ on keyboard focus. This can always
be overriden by providing the `focus` prop.

```jsx
<Grid columns={4} stretched>
  <Button onClick={() => alert('clicked')}>Default Example</Button>
  <Button danger onClick={() => alert('clicked')}>
    Danger Example
  </Button>
  <Button pill onClick={() => alert('clicked')}>
    Pill Example
  </Button>
  <Button danger pill onClick={() => alert('clicked')}>
    Danger Pill Example
  </Button>
</Grid>
```

### Types

```jsx
<Grid columns={6} stretched>
  <Button>Default</Button>
  <Button primary>Primary</Button>
  <Button pill>Pill</Button>
  <Button basic>Basic</Button>
  <Button muted>Muted</Button>
  <Button link>Link</Button>
</Grid>
```

### Sizes

```jsx
<div>
  <Grid columns={3} stretched>
    <Button size="small">Small</Button>
    <Button>Default</Button>
    <Button size="large">Large</Button>
  </Grid>
  <br />
  <Grid columns={2} stretched>
    <Button stretched>Stretched</Button>
    <Button stretched>Stretched</Button>
  </Grid>
</div>
```

### States

```jsx
<Grid columns={5} stretched>
  <Button>Default</Button>
  <Button disabled>Disabled</Button>
  <Button hovered>Hovered</Button>
  <Button focused>Focused</Button>
  <Button active>Active</Button>
</Grid>
```
