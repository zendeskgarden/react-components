You can build a menu the following way:

```
<Menu
  trigger={ <Button>Click me</Button> }
  onSelect={ (value) => console.log(value) }
>
  <Menu.Item value='profile'>Profile</Menu.Item>
  <Menu.Item value='settings'>Settings</Menu.Item>
  <Menu.Item value='theme editor' disabled>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item value='article editor'>Article Editor</Menu.Item>
  <Menu.Item value='sign out'>Sign Out</Menu.Item>
</Menu>
```

You can add an `onSelect` handler directly to the items the follwing way:

```
<Menu
  trigger={ <Button>Menu</Button> }
>
  <Menu.Item onSelect={ () => window.alert('First') }>First</Menu.Item>
  <Menu.Item onSelect={ () => window.alert('Second') }>Second</Menu.Item>
  <Menu.Separator/>
  <Menu.Item onSelect={ () => window.alert('Third') }>Third</Menu.Item>
</Menu>
```

You can pass `trigger` as a function, which will return an `{ open: PropTypes.Boolean }`,
that you can use for styling.

```
<Menu
  trigger={ ({ open }) => (
    <Button
      type={ open ? 'primary' : 'default' }>
      Menu
    </Button>
  )}
>
  <Menu.Item onSelect={ () => window.alert('First') }>First</Menu.Item>
  <Menu.Item onSelect={ () => window.alert('Second') }>Second</Menu.Item>
  <Menu.Separator/>
  <Menu.Item onSelect={ () => window.alert('Third') }>Third</Menu.Item>
</Menu>
```

You can specify the size of the menu:

```
<Grid>
  <Menu
    trigger={ <Button>Default</Button> }
  >
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Third</Menu.Item>
  </Menu>
  <Menu
    size='large'
    trigger={ <Button>Large</Button> }
  >
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Third</Menu.Item>
  </Menu>
</Grid>
```

Positioning and arrows:

```
const createMenu = (label, positioning, { arrow, centerArrow }) => (
  <Menu
    arrow={ !!arrow }
    centerArrow={ centerArrow }
    positioning={ positioning }
    stretched
    trigger={ <Button stretched>{ label }</Button> }
  >
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
  </Menu>
);

<Grid>
  <Grid columns={3} spacing='large'>
    { createMenu('Bottom right', 'bottom_right', state) }
    { createMenu('Bottom', 'bottom', state) }
    { createMenu('Bottom left', 'bottom_left', state) }
    { createMenu('Right', 'right', state) }
    { createMenu('Auto', ['bottom', 'bottom_left', 'bottom_right', 'left', 'right', 'top', 'top_left', 'top_right'], state) }
    { createMenu('Left', 'left', state) }
    { createMenu('Top right', 'top_right', state) }
    { createMenu('Top', 'top', state) }
    { createMenu('Top left', 'top_left', state) }
  </Grid>
  <Grid columns={1}>
    <Checkbox
      checked={ !!state.arrow }
      onChange={ () => setState({ arrow: !state.arrow }) }
    >
      Use arrows
    </Checkbox>
    <Checkbox
      checked={ !!state.centerArrow }
      onChange={ () => setState({ centerArrow: !state.centerArrow }) }
    >
      Center arrows
    </Checkbox>
  </Grid>
</Grid>
```

Auto positioninging from a given list of positionings:

```
<Menu
  trigger={ <Button>Click me</Button> }
  positioning={ ['bottom_right', 'right', 'top_right'] }
>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu>
```

Support for RTL:

```
<Menu
  trigger={ <Button>Click me</Button> }
  dir='rtl'
  positioning={ ['bottom_right', 'right', 'top_right'] }
>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu>
```

Setting the max height of the menu:

```
<Menu
  trigger={ <Button>Click me</Button> }
  maxHeight={ 150 }
>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu>
```

Setting margins of the anchor:

```
<Menu
  arrow
  marginBottom={ 7 }
  marginTop={ 7 }
  positioning={ ['bottom', 'top'] }
  trigger={ <Button>Click me</Button> }
>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu>
```

Stretch positioning:

```
<Menu
  positioning={ ['bottom_stretch', 'top_stretch'] }
  trigger={ <Button>The menu will stretch to the length of the button</Button> }
>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu>
```

Fixing the width of the menu:

```
<Grid>
  <Menu
    fixedWidth
    trigger={ <Button>Default</Button> }
  >
    <Menu.Item>
      <Ellipsis>
        Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
      </Ellipsis>
    </Menu.Item>
    <Menu.Item>
      <Ellipsis>
        Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch
      </Ellipsis>
    </Menu.Item>
    <Menu.Separator/>
    <Menu.Item>
      <Ellipsis>
        Chargoggagoggmanchauggagoggchaubunagungamaugg
      </Ellipsis>
    </Menu.Item>
  </Menu>
  <Menu
    fixedWidth
    size='large'
    trigger={ <Button>Large</Button> }
  >
    <Menu.Item>
      <Ellipsis>
        Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
      </Ellipsis>
    </Menu.Item>
    <Menu.Item>
      <Ellipsis>
        Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch
      </Ellipsis>
    </Menu.Item>
    <Menu.Separator/>
    <Menu.Item>
      <Ellipsis>
        Chargoggagoggmanchauggagoggchaubunagungamaugg
      </Ellipsis>
    </Menu.Item>
  </Menu>
</Grid>
```

Using the menu styling in other components:

```
<Menu.Container position='bottom'>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu.Container>
```

Visibility hooks:

```
initialState = { hidden: true };

<Grid columns={1}>
  <Text>{ `Menu is ${ state.hidden ? 'closed' : 'open' }` }</Text>
  <Menu
    trigger={ <Button>Large</Button> }
    onOpen={ () => setState({ hidden: false }) }
    onClose={ () => setState({ hidden: true }) }
  >
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Article Editor</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu>
</Grid>
```

Creating a menu with an avatar as the trigger:

```
<Menu
  trigger={
    <Avatar tabIndex={-1} size='large' src='./images/jason.png'/>
  }
  arrow
  centerArrow
>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item>Article Editor</Menu.Item>
  <Menu.Item>Sign Out</Menu.Item>
</Menu>
```
