Types:

```
const avatar = <img src='http://placeskull.com/18/18/03363d'/>;

<Grid columns={5}>
  <IconButton>{avatar}</IconButton>
  <IconButton type='primary'>{avatar}</IconButton>
  <IconButton type='basic'>{avatar}</IconButton>
  <IconButton danger>{avatar}</IconButton>
  <IconButton danger type='primary'>{avatar}</IconButton>
  <IconButton pill>{avatar}</IconButton>
  <IconButton pill type='primary'>{avatar}</IconButton>
  <IconButton pill type='basic'>{avatar}</IconButton>
  <IconButton pill danger>{avatar}</IconButton>
  <IconButton pill danger type='primary'>{avatar}</IconButton>
</Grid>
```

Sizes:

```
const avatar = <img src='http://placeskull.com/18/18/03363d'/>;

<Grid>
  <IconButton size='small' stretched>{avatar}</IconButton>
  <IconButton size='medium' stretched>{avatar}</IconButton>
  <IconButton size='large' stretched>{avatar}</IconButton>
</Grid>
```

States:

```
const avatar = <img src='http://placeskull.com/18/18/03363d'/>;
const onClick = () => alert('Clicked!');

<Grid columns={2}>
  <IconButton onClick={ onClick }>{avatar}</IconButton>
  <IconButton onClick={ onClick } disabled>{avatar}</IconButton>
  <IconButton onClick={ onClick } type='primary'>{avatar}</IconButton>
  <IconButton onClick={ onClick } type='primary' disabled>{avatar}</IconButton>
  <IconButton onClick={ onClick } type='basic'>{avatar}</IconButton>
  <IconButton onClick={ onClick } type='basic' disabled>{avatar}</IconButton>
</Grid>
```

Adding a click handler:

```
<IconButton onClick={() => window.alert('You clicked me!')}>
  <img src='http://placeskull.com/18/18/03363d'/>
</IconButton>
```

Tab order:

```
const avatar = <img src='http://placeskull.com/18/18/03363d'/>;

<Grid>
  <IconButton tabIndex={0}>{avatar}</IconButton>
  <IconButton tabIndex={-1}>{avatar}</IconButton>
  <IconButton tabIndex={0}>{avatar}</IconButton>
</Grid>
```

Rotation:

```
const avatar = <img src='http://placeskull.com/18/18/03363d'/>;

<IconButton
  isRotated={state.isRotated}
  onClick={() => setState({ isRotated: !state.isRotated})}
  pill
  size='medium'
  type='primary'
>
  {avatar}
</IconButton>
```
