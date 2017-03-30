```
const colors = [
  { name: 'Apple Green', hex: '#78A300' },
  { name: 'Verdigris', hex: '#37B8AF' },
  { name: 'Pelorous', hex: '#30AABC' },
  { name: 'Mandy', hex: '#EB4962' },
  { name: 'Persimmon', hex: '#FF6D5A' },
  { name: 'Flamingo', hex: '#EB6651' },
  { name: 'Sea Buckthorn', hex: '#F79A3E' },
  { name: 'Golden Dream', hex: '#EFC93D' }
]

const ColorSample = ({ color }) => (
  <View style={{
    backgroundColor: color.hex,
    height: '14px',
    width: '14px'
  }} />
)

const Color = ({ color, includeSample }) => (
  includeSample
    ? (
      <Grid>
        <ColorSample color={color} /> {color.name} ({color.hex})
      </Grid>
    )
    : (
      <View>
        {color.name} (<Text style={{ color: color.hex }}>{color.hex}</Text>)
      </View>
    )
)

initialState = { value: colors[0] };

<Select
  label='Select your favorite color:'
  hint='It better be Pelorous'
  selected={<Color color={state.value} />}
  onSelect={ value => setState({ value }) }
>
  {
    colors.map(color => (
      <Select.Item value={color} key={color.hex}>
        <Color color={color} includeSample />
      </Select.Item>
    ))
  }
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

Menu positioning same as the <a href="#Menu">menu</a>:

```
const items = [
  'Done chats',
  'Served chats',
  'Triaged chats',
  'Number of agent messages',
  'Number of customer messages'
]

initialState = { value: items[0] };

<View style={{ width: '200px' }}>
  <Select
    selected={ <Ellipsis>{state.value}</Ellipsis> }
    positioning={['bottom_right', 'top_right']}
    onSelect={ value => setState({ value }) }
  >
    { items.map(item => (
        <Select.Item value={item} key={item}>
          <Text style={{ whiteSpace: 'nowrap' }}>{item}</Text>
        </Select.Item>
      ))
    }
  </Select>
</View>
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
