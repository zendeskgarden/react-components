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

We provide several pre-built menu types including: `checkable, header, add, next, previous, disabled, and meta information`.

```
initialState = { selected: 'paul' };

<Menu
  trigger={ <Button>Many different menu types</Button> }
  positioning={ ['bottom_stretch', 'top_stretch'] }
>
  <Menu.HeaderItem>The Beatles</Menu.HeaderItem>
  <Menu.Separator />
  <Menu.MediaItem
    media={<img className="u-br-50%" src="http://placeskull.com/32/32/37B8AF" />}
    metaInformation={<span>john@beatles.com</span>}
    checked={state.selected === 'john'}
    value='john'
    onClick={() => setState({ selected: 'john' })}>
    John
  </Menu.MediaItem>
  <Menu.MediaItem
    media={<img className="u-br-50%" src="http://placeskull.com/32/32/EB6651" />}
    metaInformation={<span>paul@beatles.com</span>}
    checked={state.selected === 'paul'}
    value='paul'
    onClick={() => setState({ selected: 'paul' })}>
    Paul
  </Menu.MediaItem>
  <Menu.MediaItem
    media={<img className="u-br-50%" src="http://placeskull.com/32/32/30AABC" />}
    metaInformation={<span>george@beatles.com</span>}
    checked={state.selected === 'george'}
    value='george'
    onClick={() => setState({ selected: 'george' })}>
    George
  </Menu.MediaItem>
  <Menu.MediaItem
    media={<img className="u-br-50%" src="http://placeskull.com/32/32/F79A3E" />}
    metaInformation={<span>ringo@beatles.com</span>}
    checked={state.selected === 'ringo'}
    value='ringo'
    onClick={() => setState({ selected: 'ringo' })}>
    Ringo
  </Menu.MediaItem>
  <Menu.Separator/>
  <Menu.AddItem onClick={() => {
    setState({ selected: '' });
    alert('Creating new beatle');
  }}>Add New Beatle</Menu.AddItem>
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

Tree-based menus are supported with the `shouldClose` prop.

```
const initialMenus = [
  <Menu.Item key="0" value='profile'>Profile</Menu.Item>,
  <Menu.Item key="1" value='settings'>Settings</Menu.Item>,
  <Menu.Item key="2" value='theme editor' disabled>Theme Editor</Menu.Item>,
  <Menu.Separator key="3" />,
  <Menu.NextItem key="4" value='nested-item'>Nested Items</Menu.NextItem>,
  <Menu.Item key="5" value='sign out'>Sign Out</Menu.Item>
];

<State initialState={{
    menuItems: initialMenus
  }}>
  {(state, setState) => (
    <Menu
      trigger={ <Button>Tree menu</Button> }
      shouldClose={(value) => value !== 'nested-item' && value !== 'nested-previous'}
      onChange={(value) => {
        console.log(value);

        if (value === 'nested-item') {
          const newMenuItems = [
            <Menu.PreviousItem key="nested-previous" value="nested-previous">Previous Items</Menu.PreviousItem>,
            <Menu.Item key="nested-0" value='nested-item-1'>Nested Item 1</Menu.Item>,
            <Menu.Item key="nested-1" value='nested-item-2'>Nested Item 2</Menu.Item>,
            <Menu.Item key="nested-2" value='nested-item-3'>Nested Item 3</Menu.Item>
          ];
          setState({
            menuItems: newMenuItems
          })
        } else if (value === 'nested-previous') {
          setState({ menuItems: initialMenus });
        }
      }}
      onClose={() => setState({ menuItems: initialMenus })}
    >
      {state.menuItems}
    </Menu>
  ) }
</State>
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
    trigger={ <Button>This is a wide menu</Button> }
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
const customizeIconSrc = require('@zendesk/garden-svg-icons/src/14-customize.svg');
const CustomIcon = <img src={customizeIconSrc} />;

<Grid>
  <Menu.Container>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Article Editor</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu.Container>
  <Menu.Container size='small'>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.Item>Article Editor</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu.Container>
  <Menu.Container>
    <Menu.PreviousItem>PreviousItem</Menu.PreviousItem>
    <Menu.NextItem>NextItem</Menu.NextItem>
    <Menu.HeaderItem>Header</Menu.HeaderItem>
    <Menu.HeaderItem icon={CustomIcon}>Icon Header</Menu.HeaderItem>
    <Menu.Separator/>
    <Menu.Item metaInformation={<span>Meta Information!</span>}>Theme Editor</Menu.Item>
    <Menu.Separator/>
    <Menu.MediaItem media={<img src="./images/amir.png" />} metaInformation={<span>Meta <strong>Info</strong></span>}>Media Item</Menu.MediaItem>
  </Menu.Container>
  <Menu.Container>
    <Menu.Item checked>Checked Item</Menu.Item>
    <Menu.Item selected>Selected Item</Menu.Item>
    <Menu.Item disabled checked>Disabled Item</Menu.Item>
    <Menu.Separator/>
    <Menu.AddItem>Add Item</Menu.AddItem>
    <Menu.AddItem disabled>Disabled Add Item</Menu.AddItem>
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
