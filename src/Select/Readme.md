```
initialState = { value: 'foo' };

<Select
  label='Select your favorite value:'
  selected={ state.value }
  onSelect={ value => setState({ value }) }
>
  <Select.Item value='foo'>foo</Select.Item>
  <Select.Item value='bar'>bar</Select.Item>
  <Select.Item value='baz'>baz</Select.Item>
</Select>
```

States:

```
initialState = { value: 'foo' };

<Select
  disabled
  selected={ state.value }
  onSelect={ value => setState({ value }) }
>
  <Select.Item value='foo'>foo</Select.Item>
  <Select.Item value='bar'>bar</Select.Item>
  <Select.Item value='baz'>baz</Select.Item>
</Select>
```

Different kinds of select items (same as [Menu](#Menu)):

```
initialState = { value: 'Two' };

<Select
  selected={ state.value }
  onSelect={ value => setState({ value }) }
>
  <Select.Item value='One'>One</Select.Item>
  <Select.Item value='Two'>Two</Select.Item>
  <Select.Item value='Three' disabled>Three</Select.Item>
  <Select.Separator/>
  <Select.Item value='A'>A</Select.Item>
  <Select.Item value='B'>B</Select.Item>
  <Select.Item value='C'>C</Select.Item>
</Select>
```

You can put anything in the selected value:

```
const users = [
  { name: 'Amir', avatar: './images/amir.png' },
  { name: 'Jason', avatar: './images/jason.png' }
]

initialState = { selected: users[0] }

const User = ({ name, avatar }) => (
  <Grid>
    <Avatar type='human' size='small' src={ avatar }/>
    <Text>{ name }</Text>
  </Grid>
)

const selected = state.selected;

<Select
  selected={ <User name={ selected.name } avatar={ selected.avatar } /> }
  onSelect={ value => setState({ selected: value }) }
>
  {
    users.map(user => (
      <Select.Item key={user.name} value={user}>
        <User name={ user.name } avatar={ user.avatar } />
      </Select.Item>
    ))
  }
</Select>
```

Setting the max height of the menu:

```
initialState = { value: 'Two' };

<Select
  maxHeight={150}
  selected={ state.value }
  onSelect={ value => setState({ value }) }
>
  <Select.Item value='One'>One</Select.Item>
  <Select.Item value='Two'>Two</Select.Item>
  <Select.Item value='Three' disabled>Three</Select.Item>
  <Select.Separator/>
  <Select.Item value='A'>A</Select.Item>
  <Select.Item value='B'>B</Select.Item>
  <Select.Item value='C'>C</Select.Item>
</Select>
```

Support for RTL:

```
<Select
  dir='rtl'
  selected='Two'
>
  <Select.Item>One</Select.Item>
  <Select.Item>Two</Select.Item>
  <Select.Item>Three</Select.Item>
</Select>
```
