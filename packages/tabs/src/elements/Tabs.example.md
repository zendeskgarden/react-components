The `Tabs` component requires the following structure.

- All `children` require a unique `key` and a `label` to display
- Each `child` can have an optional `disabled` prop to disable selection
- Each `child` can have an optional `tabProps` prop to provide props to the Tab that is created

All elements proxy the props of their native DOM representations.

If this abstraction is not able to handle your use-case use the
[useTabs()](https://www.npmjs.com/package/@zendeskgarden/container-tabs)
hook with our presentation components.

```jsx static
<Tabs>
  <TabPanel label="Tab 1" key="unique-value-1">
    Tab 1 content
  </TabPanel>
  <TabPanel label={<div>Tab 2</div>} key="unique-value-2" tabProps={{ 'data-test-id': 'custom' }}>
    Tab 2 content
  </TabPanel>
  ...
</Tabs>
```

### Uncontrolled Usage

```jsx
<Tabs>
  <TabPanel label="Tab 1" key="tab-1">
    Tab 1 content
  </TabPanel>
  <TabPanel label="Tab 2" key="tab-2">
    Tab 2 content
  </TabPanel>
  <TabPanel label="Disabled Tab" disabled>
    Disabled content
  </TabPanel>
  <TabPanel label="Tab 3" key="tab-3">
    Tab 3 content
  </TabPanel>
</Tabs>
```

### Vertical

```jsx
tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

<Tabs vertical>
  {tabs.map(tab => (
    <TabPanel label={tab} key={tab}>
      Vertical {tab} content
    </TabPanel>
  ))}
</Tabs>;
```

### Controlled Usage

```jsx
initialState = { selectedKey: 'tab-2' };

<Tabs selectedKey={state.selectedKey} onChange={selectedKey => setState({ selectedKey })}>
  <TabPanel label="Tab 1" key="tab-1">
    Tab 1 content
  </TabPanel>
  <TabPanel label="Tab 2" key="tab-2">
    Tab 2 content
  </TabPanel>
  <TabPanel label="Tab 3" key="tab-3">
    Tab 3 content
  </TabPanel>
</Tabs>;
```
