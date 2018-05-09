For accessibility ensure that all children include an `alt` description.

### Types

```jsx
<Grid columns={2} stretched>
  <Avatar>
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
  <Avatar system>
    <img src="images/zendesk.jpeg" alt="Zendesk" />
  </Avatar>
</Grid>
```

### Sizes

```jsx
<Grid columns={3} stretched>
  <Avatar size="small">
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
  <Avatar>
    <img src="images/amir.png" alt="Example Avatar" />
  </Avatar>
  <Avatar size="large">
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
</Grid>
```

### States

```jsx
<Grid columns={3} stretched>
  <Avatar size="small">
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
  <Avatar disabled size="small">
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
  <Avatar isBorderless size="small">
    <img src="images/amir.png" alt="Example Avatar" />
  </Avatar>
  <Avatar size="large">
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
  <Avatar disabled size="large">
    <img src="images/jason.png" alt="Example Avatar" />
  </Avatar>
  <Avatar isBorderless size="large">
    <img src="images/amir.png" alt="Example Avatar" />
  </Avatar>
</Grid>
```
