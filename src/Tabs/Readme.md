## Horizontal tabs

```
initialState = { active: 'pancetta' };

<Tabs active={ state.active } onActivate={ (id) => setState({ active: id }) }>
  <Tabs.Panel label='Slab bacon' id='slab'>
    A single piece of large bacon with the rind left on, slab bacon is sometimes
    roasted over corncobs for additional flavor.
  </Tabs.Panel>
  <Tabs.Panel label='Pancetta' id='pancetta'>
    Italian-style bacon cured with peppercorns, salt, and cloves, pancetta is
    packaged in a roll similar to sausage and sold by the slice.
  </Tabs.Panel>
  <Tabs.Panel label='Gypsy bacon' id='gypsy' disabled>
    A Hungarian specialty, gypsy bacon is a slab of bacon roasted and seasoned with
    paprika. It is cut into thin slices and then served on rye bread. It is often
    sold in Hungarian or German markets.
  </Tabs.Panel>
  <Tabs.Panel label='Fatback' id='fatback'>
    Fatback: A slab of fat that is cut along the back of the pig, fatback can be
    used as lard for frying or sautéing or cut into barding strips and wrapped
    around lean roasts. It is also used to line pate pans or terrine. Before cutting
    it into sheets, fatback is placed in the freezer so that it is easier to slice.
    Fatback may be seasoned and left to age
  </Tabs.Panel>
  <Tabs.Panel label='American-style bacon' id='american'>
    American-style bacon: Cut from the belly of the pig, American-style bacon is
    cured in salt and then smoked. It has a streaky texture and ranges from very
    lean to very fatty depending on the selection and raising of the hog. One of the
    most common types of American-style bacon is Virginia bacon. American-style
    bacon is cut in a variety of thicknesses: thin, regular, thick, and extra thick
    (sometimes referred to as bacon steak). Before the bacon is sliced the rind is
    taken off.
  </Tabs.Panel>
</Tabs>
```

Support for RTL:

```
initialState = { active: 'pancetta' };

<Tabs active={ state.active } dir='rtl' onActivate={ (id) => setState({ active: id }) }>
  <Tabs.Panel label='Slab bacon' id='slab'>
    A single piece of large bacon with the rind left on, slab bacon is sometimes
    roasted over corncobs for additional flavor.
  </Tabs.Panel>
  <Tabs.Panel label='Pancetta' id='pancetta'>
    Italian-style bacon cured with peppercorns, salt, and cloves, pancetta is
    packaged in a roll similar to sausage and sold by the slice.
  </Tabs.Panel>
  <Tabs.Panel label='Gypsy bacon' id='gypsy' disabled>
    A Hungarian specialty, gypsy bacon is a slab of bacon roasted and seasoned with
    paprika. It is cut into thin slices and then served on rye bread. It is often
    sold in Hungarian or German markets.
  </Tabs.Panel>
  <Tabs.Panel label='Fatback' id='fatback'>
    Fatback: A slab of fat that is cut along the back of the pig, fatback can be
    used as lard for frying or sautéing or cut into barding strips and wrapped
    around lean roasts. It is also used to line pate pans or terrine. Before cutting
    it into sheets, fatback is placed in the freezer so that it is easier to slice.
    Fatback may be seasoned and left to age
  </Tabs.Panel>
  <Tabs.Panel label='American-style bacon' id='american'>
    American-style bacon: Cut from the belly of the pig, American-style bacon is
    cured in salt and then smoked. It has a streaky texture and ranges from very
    lean to very fatty depending on the selection and raising of the hog. One of the
    most common types of American-style bacon is Virginia bacon. American-style
    bacon is cut in a variety of thicknesses: thin, regular, thick, and extra thick
    (sometimes referred to as bacon steak). Before the bacon is sliced the rind is
    taken off.
  </Tabs.Panel>
</Tabs>
```

## Vertical tabs

```
initialState = { active: 'pancetta' };

<Tabs active={ state.active } onActivate={ (id) => setState({ active: id }) } vertical>
  <Tabs.Panel label='Slab bacon' id='slab'>
    A single piece of large bacon with the rind left on, slab bacon is sometimes
    roasted over corncobs for additional flavor.
  </Tabs.Panel>
  <Tabs.Panel label='Pancetta' id='pancetta'>
    Italian-style bacon cured with peppercorns, salt, and cloves, pancetta is
    packaged in a roll similar to sausage and sold by the slice.
  </Tabs.Panel>
  <Tabs.Panel label='Gypsy bacon' id='gypsy' disabled>
    A Hungarian specialty, gypsy bacon is a slab of bacon roasted and seasoned with
    paprika. It is cut into thin slices and then served on rye bread. It is often
    sold in Hungarian or German markets.
  </Tabs.Panel>
  <Tabs.Panel label='Fatback' id='fatback'>
    Fatback: A slab of fat that is cut along the back of the pig, fatback can be
    used as lard for frying or sautéing or cut into barding strips and wrapped
    around lean roasts. It is also used to line pate pans or terrine. Before cutting
    it into sheets, fatback is placed in the freezer so that it is easier to slice.
    Fatback may be seasoned and left to age
  </Tabs.Panel>
  <Tabs.Panel label='American-style bacon' id='american'>
    American-style bacon: Cut from the belly of the pig, American-style bacon is
    cured in salt and then smoked. It has a streaky texture and ranges from very
    lean to very fatty depending on the selection and raising of the hog. One of the
    most common types of American-style bacon is Virginia bacon. American-style
    bacon is cut in a variety of thicknesses: thin, regular, thick, and extra thick
    (sometimes referred to as bacon steak). Before the bacon is sliced the rind is
    taken off.
  </Tabs.Panel>
</Tabs>
```

Support for RTL:

```
initialState = { active: 'pancetta' };

<Tabs
  active={ state.active }
  dir='rtl'
  onActivate={ (id) => setState({ active: id })}
  vertical
>
  <Tabs.Panel label='Slab bacon' id='slab'>
    A single piece of large bacon with the rind left on, slab bacon is sometimes
    roasted over corncobs for additional flavor.
  </Tabs.Panel>
  <Tabs.Panel label='Pancetta' id='pancetta'>
    Italian-style bacon cured with peppercorns, salt, and cloves, pancetta is
    packaged in a roll similar to sausage and sold by the slice.
  </Tabs.Panel>
  <Tabs.Panel label='Gypsy bacon' id='gypsy' disabled>
    A Hungarian specialty, gypsy bacon is a slab of bacon roasted and seasoned with
    paprika. It is cut into thin slices and then served on rye bread. It is often
    sold in Hungarian or German markets.
  </Tabs.Panel>
  <Tabs.Panel label='Fatback' id='fatback'>
    Fatback: A slab of fat that is cut along the back of the pig, fatback can be
    used as lard for frying or sautéing or cut into barding strips and wrapped
    around lean roasts. It is also used to line pate pans or terrine. Before cutting
    it into sheets, fatback is placed in the freezer so that it is easier to slice.
    Fatback may be seasoned and left to age
  </Tabs.Panel>
  <Tabs.Panel label='American-style bacon' id='american'>
    American-style bacon: Cut from the belly of the pig, American-style bacon is
    cured in salt and then smoked. It has a streaky texture and ranges from very
    lean to very fatty depending on the selection and raising of the hog. One of the
    most common types of American-style bacon is Virginia bacon. American-style
    bacon is cut in a variety of thicknesses: thin, regular, thick, and extra thick
    (sometimes referred to as bacon steak). Before the bacon is sliced the rind is
    taken off.
  </Tabs.Panel>
</Tabs>
```

## Dynamic content

If you use a function as the children of a `Tab.Panel`, that function will be
called to render the tab content when the tab is being activated.

```
const tabs = {
  slab: `
    A single piece of large bacon with the rind left on, slab bacon is sometimes
    roasted over corncobs for additional flavor.
  `,
  pancetta: `
    Italian-style bacon cured with peppercorns, salt, and cloves, pancetta is
    packaged in a roll similar to sausage and sold by the slice.
  `,
  gypsy: `
    A Hungarian specialty, gypsy bacon is a slab of bacon roasted and seasoned
    with paprika. It is cut into thin slices and then served on rye bread. It is
    often sold in Hungarian or German markets.
  `,
  fatback: `
    A slab of fat that is cut along the back of the pig, fatback can be used as
    lard for frying or sautéing or cut into barding strips and wrapped around lean
    roasts. It is also used to line pate pans or terrine. Before cutting it into
    sheets, fatback is placed in the freezer so that it is easier to slice.
    Fatback may be seasoned and left to age
  `,
  american: `
    American-style bacon: Cut from the belly of the pig, American-style bacon is
    cured in salt and then smoked. It has a streaky texture and ranges from very
    lean to very fatty depending on the selection and raising of the hog. One of
    the most common types of American-style bacon is Virginia bacon.
    American-style bacon is cut in a variety of thicknesses: thin, regular, thick,
    and extra thick (sometimes referred to as bacon steak). Before the bacon is
    sliced the rind is taken off.
  `
}

const renderTab = (tabId) => (
  <Text>{ tabs[tabId] }</Text>
)

initialState = { active: 'pancetta' };

<Tabs active={ state.active } onActivate={ (active) => setState({ active }) }>
  <Tabs.Panel label='Slab bacon' id='slab'>
    { renderTab }
  </Tabs.Panel>
  <Tabs.Panel label='Pancetta' id='pancetta'>
    { renderTab }
  </Tabs.Panel>
  <Tabs.Panel label='Gypsy bacon' id='gypsy' disabled>
    { renderTab }
  </Tabs.Panel>
  <Tabs.Panel label='American-style bacon' id='american'>
    { renderTab }
  </Tabs.Panel>
</Tabs>
```
