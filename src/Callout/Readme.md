```
<Callout>This is a default callout</Callout>
```

Types:

```
<Grid columns={1} stretched>
  <Callout title='Default' type='default'>
    This is a default callout
  </Callout>
  <Callout title='Success!' type='success'>
    This is a success callout
  </Callout>
  <Callout title='Warning!' type='warning'>
    This is a warning callout
  </Callout>
  <Callout title='Error!' type='error'>
    This is an error callout
  </Callout>
</Grid>
```

Removable:

```
const onClose = () => alert('Removed!');

<Grid columns={1} stretched>
  <Callout onClose={onClose} tabIndex={0}>This is a default callout</Callout>
  <Callout onClose={onClose} tabIndex={0} type='success'>This is a success callout</Callout>
  <Callout onClose={onClose} tabIndex={0} type='warning'>This is a warning callout</Callout>
  <Callout onClose={onClose} tabIndex={0} type='error'>This is an error callout</Callout>
</Grid>
```

Support for RTL:

```
const onRemove = () => console.log('Removed!')

const onClose = () => alert('Removed!');

<Grid columns={1} stretched>
  <Callout dir='rtl' onClose={onClose} tabIndex={0}>This is a default callout</Callout>
  <Callout dir='rtl' onClose={onClose} tabIndex={0} type='success'>This is a success callout</Callout>
  <Callout dir='rtl' onClose={onClose} tabIndex={0} type='warning'>This is a warning callout</Callout>
  <Callout dir='rtl' onClose={onClose} tabIndex={0} type='error'>This is an error callout</Callout>
</Grid>
```
