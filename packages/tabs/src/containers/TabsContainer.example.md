```jsx
initialState = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
  selectedKey: 'Tab 1',
  focusedKey: undefined
};

<TabsContainer
  selectedKey={state.selectedKey}
  focusedKey={state.focusedKey}
  onStateChange={newState => setState(newState)}
>
  {({ getTabListProps, getTabProps, getTabPanelProps }) => (
    <TabsView>
      <TabList {...getTabListProps()}>
        {state.tabs.map(tab => (
          <Tab
            {...getTabProps({
              key: tab,
              selected: tab === state.selectedKey,
              focused: tab === state.focusedKey
            })}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      {state.tabs.map(tab => (
        <TabPanel
          {...getTabPanelProps({
            key: tab
          })}
        >
          {tab} content
        </TabPanel>
      ))}
    </TabsView>
  )}
</TabsContainer>;
```

```jsx
initialState = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
  selectedKey: 'Tab 1',
  focusedKey: undefined
};

<TabsContainer
  vertical
  selectedKey={state.selectedKey}
  focusedKey={state.focusedKey}
  onStateChange={newState => setState(newState)}
>
  {({ getTabListProps, getTabProps, getTabPanelProps }) => (
    <TabsView vertical>
      <TabList {...getTabListProps()}>
        {state.tabs.map(tab => (
          <Tab
            {...getTabProps({
              key: tab,
              selected: tab === state.selectedKey,
              focused: tab === state.focusedKey
            })}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      {state.tabs.map(tab => (
        <TabPanel
          {...getTabPanelProps({
            key: tab
          })}
        >
          {tab} content
        </TabPanel>
      ))}
    </TabsView>
  )}
</TabsContainer>;
```
