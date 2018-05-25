# @zendeskgarden/react-tabs [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tabs.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tabs)

This package includes several varieties of Tabs relating to
the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tabs
```

## Usage

```jsx static
initialState = { selectedKey: 'Tab 1' };

<Tabs selectedKey={state.selected} onChange={selectedKey => setState({ selectedKey })}>
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
</Tabs>;
```
