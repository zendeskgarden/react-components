#### **Accessibility Message**

For an accessible experience for all of our users, it is important to use the
`Select` component in conjunction with the [SelectField](#selectfield) component
and/or provide a `Label`, `Hint`, and or `Message`.

```jsx
initialState = {
  selectedKey: 'item-1'
};

<SelectField>
  <Label>Default Select</Label>
  <Select
    selectedKey={state.selectedKey}
    onChange={selectedKey => setState({ selectedKey })}
    options={[
      <Item key="item-1">Item 1</Item>,
      <Item key="item-2">Item 2</Item>,
      <Item disabled>Disabled Item</Item>,
      <Item key="item-3">Item 3</Item>
    ]}
  >
    {state.selectedKey}
  </Select>
</SelectField>;
```

### Small Select

```jsx
initialState = {
  selectedKey: 'item-1'
};

<SelectField>
  <Label>Small Select</Label>
  <Select
    small
    selectedKey={state.selectedKey}
    onChange={selectedKey => setState({ selectedKey })}
    options={[
      <Item key="item-1">Item 1</Item>,
      <Item key="item-2">Item 2</Item>,
      <Item disabled>Disabled Item</Item>,
      <Item key="item-3">Item 3</Item>
    ]}
  >
    {state.selectedKey}
  </Select>
</SelectField>;
```

```jsx
const colors = {
  'Apple Green': '#78A300',
  Verdigris: '#37B8AF',
  Pelorous: '#30AABC',
  Mandy: '#EB4962',
  Persimmon: '#FF6D5A',
  Flamingo: '#EB6651',
  'Sea Buckthorn': '#F79A3E',
  'Golden Dream': '#EFC93D'
};

const ColorSampleSquare = styled.div`
  background-color: ${props => props.color};
  width: 1em;
  height: 1em;
`;

const ColorSamplePreview = styled.div`
  cursor: default;
`;

const InlineItem = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const Color = ({ name, color, includeSample }) =>
  includeSample ? (
    <div>
      <InlineItem>
        <ColorSampleSquare color={color} />
      </InlineItem>
      <InlineItem>{name}</InlineItem>
      <InlineItem>({color})</InlineItem>
    </div>
  ) : (
    <ColorSamplePreview>
      {name} (<span style={{ color }}>{color}</span>)
    </ColorSamplePreview>
  );

initialState = {
  selectedKey: 'Apple Green'
};

<SelectField>
  <Label>Advanced Layouts</Label>
  <Hint>The "selected" preview can be different than the options</Hint>
  <Select
    selectedKey={state.selectedKey}
    onChange={selectedKey => setState({ selectedKey })}
    options={[
      Object.keys(colors).map(colorKey => (
        <Item key={colorKey} textValue={colorKey}>
          <Color color={colors[colorKey]} name={colorKey} includeSample />
        </Item>
      ))
    ]}
  >
    <Color color={colors[state.selectedKey]} name={state.selectedKey} />
  </Select>
</SelectField>;
```

#### Tree Select

This is a basic tree select example implementation. Due to the many different
tree structures and implementations the component is unopinionated about the
default focused/selected states.

If you need a tree select make sure to handle any edge cases your
implementation may need during keyboard interaction.

```jsx
const Loader = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

initialState = {
  selectedKey: undefined,
  focusedKey: undefined,
  isLoading: false,
  isOpen: false
}

retrieveMenuItems = (selectedKey, isLoading) => {
  if (isLoading) {
    return [<Loader>Simulate loading for 1 second...</Loader>];
  }

  if (selectedKey === 'specific-settings' || selectedKey === 'cool-setting' ||
  selectedKey === 'uncool-setting' || selectedKey === 'another-cool-setting') {
    return [
      <PreviousItem key="root">Specific Settings</PreviousItem>,
      <Separator key="separator" />,
      <Item key="cool-setting">Cool Setting</Item>,
      <Item key="uncool-setting">Uncool Setting</Item>,
      <Item key="another-cool-setting">Another Cool Setting</Item>
    ];
  }

  return [
    <Item key="profile">Profile</Item>,
    <Item key="settings">Settings</Item>,
    <Item key="user-images">User Images</Item>,
    <NextItem key="specific-settings">Specific Settings</NextItem>,
    <Item key="theme-editor">Theme Editor</Item>
  ];
}

<SelectField>
  <Label>Tree Select</Label>
  <Select
    isOpen={state.isOpen}
    focusedKey={state.focusedKey}
    onStateChange={newState => {
      setState(newState);
    }}
    onChange={selectedKey => {
      let focusedKey = 'profile';
      let isLoading = false;

      if (selectedKey === 'specific-settings') {
        focusedKey = 'cool-setting';
        isLoading = true;

        setTimeout(() => {
          setState({ isLoading: false });
        }, 1000);

      } else if (selectedKey === 'root') {
        focusedKey = 'specific-settings';
      }

      setState({ selectedKey, focusedKey, isLoading });
    }}
    options={retrieveMenuItems(state.selectedKey, state.isLoading)}
    dropdownProps={{ style: { height: 215 }}}
  >
    {state.selectedKey || 'Nothing selected yet'}
  </Select>
</SelectField>
```
