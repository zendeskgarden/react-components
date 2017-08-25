You can build a menu the following way:

```
<Menu
  trigger={ <Button>Click me</Button> }
  onChange={ (value) => console.log(value) }
>
  <Menu.Item value='profile'>Profile</Menu.Item>
  <Menu.Item value='settings'>Settings</Menu.Item>
  <Menu.Item value='theme editor' disabled>Theme Editor</Menu.Item>
  <Menu.Separator/>
  <Menu.Item value='article editor'>Article Editor</Menu.Item>
  <Menu.Item value='sign out'>Sign Out</Menu.Item>
</Menu>
```

You can add an `onClick` handler directly to the items as well:

```
<Menu
  trigger={ <Button>Menu</Button> }
>
  <Menu.Item onClick={ () => window.alert('First') }>First</Menu.Item>
  <Menu.Item onClick={ () => window.alert('Second') }>Second</Menu.Item>
  <Menu.Separator/>
  <Menu.Item onClick={ () => window.alert('Third') }>Third</Menu.Item>
</Menu>
```

Links:

```
<Menu
  trigger={ <Button>Links</Button> }
>
  <Menu.LinkItem href='https://www.zendesk.com'>Zendesk</Menu.LinkItem>
  <Menu.LinkItem href='https://www.zendesk.com' target='_blank'>Zendesk (new window)</Menu.LinkItem>
  <Menu.LinkItem href='https://www.zendesk.com/help-center' disabled>Help Center</Menu.LinkItem>
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
  <Menu.Item onClick={ () => window.alert('First') }>First</Menu.Item>
  <Menu.Item onClick={ () => window.alert('Second') }>Second</Menu.Item>
  <Menu.Separator/>
  <Menu.Item onClick={ () => window.alert('Third') }>Third</Menu.Item>
</Menu>
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

Sizes:

```
<Grid>
  <Menu
    size='small'
    trigger={ <Button>Small</Button> }
  >
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Article Editor</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu>
  <Menu
    size='medium'
    trigger={ <Button>Medium</Button> }
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

You can set the menu to be wide:

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
    trigger={ <Button>Wide</Button> }
    wide
  >
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Third</Menu.Item>
  </Menu>
</Grid>
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
    trigger={ <Button>Wide</Button> }
    wide
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
<Grid>
  <Menu.Container>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Article Editor</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu.Container>
  <Menu.Container size='small' wide>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Article Editor</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu.Container>
</Grid>
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
