Types:

```
<Grid columns={3}>
  <Button>Default</Button>
  <Button type='primary'>Primary</Button>
  <Button type='basic'>Basic</Button>
  <Button pill>Default</Button>
  <Button pill type='primary'>Primary</Button>
  <Button pill type='basic'>Basic</Button>
</Grid>
```

Sizes:

```
<Grid columns={1}>
  <Button size='small' stretched>Small</Button>
  <Button size='medium' stretched>Medium</Button>
  <Button size='large' stretched>Large</Button>
</Grid>
```

Stretching:

```
<Grid stretched columns={1}>
  <Button stretched size='small'>Small</Button>
  <Button stretched size='medium'>Medium</Button>
  <Button stretched size='large'>Large</Button>
</Grid>
```

States:

```
const onClick = () => alert('Clicked!');

<Grid columns={2}>
  <Button onClick={ onClick }>Default</Button>
  <Button onClick={ onClick } disabled>Disabled</Button>
  <Button onClick={ onClick } type='primary'>Primary</Button>
  <Button onClick={ onClick } type='primary' disabled>Disabled</Button>
  <Button onClick={ onClick } type='basic'>Basic</Button>
  <Button onClick={ onClick } type='basic' disabled>Disabled</Button>
</Grid>
```

Adding a click handler:

```
<Button onClick={() => window.alert('You clicked me!')}>
  Default
</Button>
```

Tab order:

```
<Grid tabIndex={0}>
  <Button tabIndex={0}>Tab</Button>
  <Button tabIndex={-1}>Skip</Button>
  <Button tabIndex={0}>Tab</Button>
</Grid>
```
