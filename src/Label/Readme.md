```
<Label>Label</Label>
```

Types:

```
<Grid columns={4} style={{ textAlign: 'center' }}>
  <Label type='default'>Default</Label>
  <Label type='success'>Success</Label>
  <Label type='warning'>Warning</Label>
  <Label type='error'>Error</Label>
  <Label type='default' pill>Default</Label>
  <Label type='success' pill>Success</Label>
  <Label type='warning' pill>Warning</Label>
  <Label type='error' pill>Error</Label>
</Grid>
```

Sizes:

```
<Grid columns={2} spacing='medium' style={{ textAlign: 'center' }}>
  <Label size='small'>This is a small label</Label>
  <Label size='small' pill>This is a small label</Label>
  <Label size='medium'>This is a medium label</Label>
  <Label size='medium' pill>This is a medium label</Label>
  <Label size='large'>This is a large label</Label>
  <Label size='large' pill>This is a large label</Label>
</Grid>
```

Round labels:

```
<Grid columns={4} spacing='medium' style={{ textAlign: 'center' }}>
  <Label size='small' round>8</Label>
  <Label size='small' type='success' round>8</Label>
  <Label size='small' type='warning' round>8</Label>
  <Label size='small' type='error' round>8</Label>
  <Label size='medium' round>13</Label>
  <Label size='medium' type='success' round>13</Label>
  <Label size='medium' type='warning' round>13</Label>
  <Label size='medium' type='error' round>13</Label>
  <Label size='large' round>21</Label>
  <Label size='large' type='success' round>21</Label>
  <Label size='large' type='warning' round>21</Label>
  <Label size='large' type='error' round>21</Label>
</Grid>
```

Avatars:

```
const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

<Grid columns={2} spacing='medium' style={{ textAlign: 'center' }}>
  <Label avatar={avatar} size='small'>This is a small label</Label>
  <Label avatar={avatar} size='small' pill>This is a small label</Label>
  <Label avatar={avatar} size='medium'>This is a medium label</Label>
  <Label avatar={avatar} size='medium' pill>This is a medium label</Label>
  <Label avatar={avatar} size='large'>This is a large label</Label>
  <Label avatar={avatar} size='large' pill>This is a large label</Label>
</Grid>
```

Removable:

```
const onRemove = () => alert('Removed!')
const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

<Grid columns={4} spacing='medium' style={{ textAlign: 'center' }}>
  <Label onRemove={onRemove} tabIndex={0} size='small' avatar={avatar}>This is a small label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='small'>This is a small label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='small' pill avatar={avatar}>This is a small label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='small' pill>This is a small label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='medium' avatar={avatar}>This is a medium label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='medium'>This is a medium label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='medium' pill avatar={avatar}>This is a medium label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='medium' pill>This is a medium label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='large' avatar={avatar}>This is a large label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='large'>This is a large label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='large' pill avatar={avatar}>This is a large label</Label>
  <Label onRemove={onRemove} tabIndex={0} size='large' pill>This is a large label</Label>
</Grid>
```

Support for RTL:

```
const onRemove = () => console.log('Removed!')
const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

<Grid columns={4} spacing='medium' style={{ textAlign: 'center' }}>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='small' avatar={avatar}>This is a small label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='small'>This is a small label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='small' pill avatar={avatar}>This is a small label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='small' pill>This is a small label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='medium' avatar={avatar}>This is a medium label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='medium'>This is a medium label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='medium' pill avatar={avatar}>This is a medium label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='medium' pill>This is a medium label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='large' avatar={avatar}>This is a large label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='large'>This is a large label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='large' pill avatar={avatar}>This is a large label</Label>
  <Label dir='rtl' onRemove={onRemove} tabIndex={0} size='large' pill>This is a large label</Label>
</Grid>
```

Custom colors:

```
<Grid>
  <Label className='u-bg-verdigris'>u-bg-verdigris</Label>
  <Label className='u-bg-submarine'>u-bg-submarine</Label>
  <Label className='u-bg-mandy'>u-bg-mandy</Label>
</Grid>
```

Tab order:

```
<Grid>
  <Label tabIndex={0}>Tab</Label>
  <Label tabIndex={-1}>Skip</Label>
  <Label tabIndex={0}>Tab</Label>
</Grid>
```
