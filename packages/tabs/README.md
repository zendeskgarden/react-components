# @zendesk/garden-react-tabs

This package includes several varieties of Tabs relating to
the [Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-tabs
```

## Usage

```jsx static
initialState = { selectedKey: 'Tab 1' };

<Tabs
  selectedKey={state.selected}
  onChange={setState}>
  <TabPanel label="Tab 1" key="tab-1">Tab 1 content</TabPanel>
  <TabPanel label="Tab 2" key="tab-2">Tab 2 content</TabPanel>
  <TabPanel label="Disabled Tab" disabled>Disabled content</TabPanel>
  <TabPanel label="Tab 3" key="tab-3">Tab 3 content</TabPanel>
</Tabs>
```
