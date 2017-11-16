Use the theme provider to provide a theme for the children of the component.

```
const darkTheme = require('../../../themes/electroid-dark-theme').default;
const exampleTheme = require('../../../themes/example-theme').default;
const neutralTheme = require('../../../themes/neutral-theme').default;

<Grid spacing='large'>
  <ThemeProvider theme={ exampleTheme }>
    <Grid columns={ 1 }>
      <strong className='u-semibold'>Example Theme</strong>
      <Anchor>Anchor</Anchor>
      <Button>Button</Button>
      <ButtonGroup active='button'>
        <ButtonGroup.Item id='button'>Button</ButtonGroup.Item>
        <ButtonGroup.Item id='group'>Group</ButtonGroup.Item>
      </ButtonGroup>
      <Checkbox checked>Checkbox</Checkbox>
      <FormLabel>
        <IconButton>
          <img src='http://placeskull.com/14/14/04444D/16/0' />
        </IconButton>
        <span className='u-ml-sm'>Icon Button</span>
      </FormLabel>
      <Label>Label</Label>
      <MultiSelect selectedItems={[
          <MultiSelect.Label>Multi</MultiSelect.Label>,
          <MultiSelect.Label>Select</MultiSelect.Label>
        ]}>
        <MultiSelect.Item>Multi</MultiSelect.Item>
        <MultiSelect.Item>Select</MultiSelect.Item>
      </MultiSelect>
      <FormLabel>Pagination</FormLabel>
      <Pagination currentPage={1} id='pagination' total={3} />
      <RadioButton checked>Radio Button</RadioButton>
      <Range label='Range' />
      <Select label='Select' selected='Select'>
        <Select.Item>Select</Select.Item>
      </Select>
      <Tabs active='selected'>
        <Tabs.Panel label='Tabs' id='selected' />
        <Tabs.Panel label='Tabs' id='deselected' />
      </Tabs>
      <TextArea
        label='TextArea'
        placeholder='placeholder' />
      <TextInput
        label='TextInput'
        placeholder='placeholder' />
      <Toggle checked>Toggle</Toggle>
    </Grid>
  </ThemeProvider>
  <ThemeProvider theme={ darkTheme }>
    <div className='u-bg-daintree u-p'>
      <Grid columns={ 1 }>
        <strong className='u-fg-white u-semibold'>Dark Theme</strong>
        <Anchor>Anchor</Anchor>
        <Button>Button</Button>
        <ButtonGroup active='button'>
          <ButtonGroup.Item id='button'>Button</ButtonGroup.Item>
          <ButtonGroup.Item id='group'>Group</ButtonGroup.Item>
        </ButtonGroup>
        <Checkbox checked>Checkbox</Checkbox>
        <FormLabel>
          <IconButton>
            <img src='http://placeskull.com/14/14/04444D/16/0' />
          </IconButton>
          <span className='u-fg-white u-ml-sm'>Icon Button</span>
        </FormLabel>
        <Label>Label</Label>
        <MultiSelect selectedItems={[
            <MultiSelect.Label>Multi</MultiSelect.Label>,
            <MultiSelect.Label>Select</MultiSelect.Label>
          ]}>
          <MultiSelect.Item>Multi</MultiSelect.Item>
          <MultiSelect.Item>Select</MultiSelect.Item>
        </MultiSelect>
        <FormLabel>
          <span className='u-fg-white'>Pagination</span>
        </FormLabel>
        <Pagination currentPage={1} id='pagination' total={3} />
        <RadioButton checked>Radio Button</RadioButton>
        <Range label='Range' />
        <Select label='Select' selected='Select'>
          <Select.Item>Select</Select.Item>
        </Select>
        <Tabs active='selected'>
          <Tabs.Panel label='Tabs' id='selected' />
          <Tabs.Panel label='Tabs' id='deselected' />
        </Tabs>
        <TextArea
          label='TextArea'
          placeholder='placeholder' />
        <TextInput
          label='TextInput'
          placeholder='placeholder' />
        <Toggle checked>Toggle</Toggle>
      </Grid>
    </div>
  </ThemeProvider>
  <ThemeProvider theme={ neutralTheme }>
    <Grid columns={ 1 }>
      <strong className='u-semibold'>Neutral Theme</strong>
      <Anchor>Anchor</Anchor>
      <Button>Button</Button>
      <ButtonGroup active='button'>
        <ButtonGroup.Item id='button'>Button</ButtonGroup.Item>
        <ButtonGroup.Item id='group'>Group</ButtonGroup.Item>
      </ButtonGroup>
      <Checkbox checked>Checkbox</Checkbox>
      <FormLabel>
        <IconButton>
          <img src='http://placeskull.com/14/14/04444D/16/0' />
        </IconButton>
        <span className='u-ml-sm'>Icon Button</span>
      </FormLabel>
      <Label>Label</Label>
      <MultiSelect selectedItems={[
          <MultiSelect.Label type='light'>Multi</MultiSelect.Label>,
          <MultiSelect.Label type='light'>Select</MultiSelect.Label>
        ]}>
        <MultiSelect.Item>Multi</MultiSelect.Item>
        <MultiSelect.Item>Select</MultiSelect.Item>
      </MultiSelect>
      <FormLabel>Pagination</FormLabel>
      <Pagination currentPage={1} id='pagination' total={3} />
      <RadioButton checked>Radio Button</RadioButton>
      <Range label='Range' />
      <Select label='Select' selected='Select'>
        <Select.Item>Select</Select.Item>
      </Select>
      <Tabs active='selected'>
        <Tabs.Panel label='Tabs' id='selected' />
        <Tabs.Panel label='Tabs' id='deselected' />
      </Tabs>
      <TextArea
        label='TextArea'
        placeholder='placeholder' />
      <TextInput
        label='TextInput'
        placeholder='placeholder' />
      <Toggle checked>Toggle</Toggle>
    </Grid>
  </ThemeProvider>
</Grid>
```

Below you can change the theme of the styleguide:

```
const darkTheme = require('../../../themes/electroid-dark-theme').default
const exampleTheme = require('../../../themes/example-theme').default
const neutralTheme = require('../../../themes/neutral-theme').default

const selectTheme = (theme) => {
  localStorage.setItem('rc-theme', theme)
  location.reload()
};

<Grid>
  <ThemeProvider theme={ null }>
    <Button onClick={ () => selectTheme('default') }>Default theme</Button>
  </ThemeProvider>
  <ThemeProvider theme={ darkTheme }>
    <Button onClick={ () => selectTheme('electroid-dark') } type='primary'>Dark theme</Button>
  </ThemeProvider>
  <ThemeProvider theme={ exampleTheme }>
    <Button onClick={ () => selectTheme('example') }>Example theme</Button>
  </ThemeProvider>
  <ThemeProvider theme={ neutralTheme }>
    <Button onClick={ () => selectTheme('neutral-theme') }>Neutral theme</Button>
  </ThemeProvider>
</Grid>
```
