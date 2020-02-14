# @zendeskgarden/react-tabs [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tabs.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tabs)

This package includes several varieties of Tabs relating to
the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tabs

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';

initialState = { selectedItem: 'tab-1' };

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tabs selectedItem={state.selectedItem} onChange={selectedItem => setState({ selectedItem })}>
    <TabList>
      <Tab item="tab-1">Tab 1</Tab>
      <Tab item="tab-2">Tab 2</Tab>
      <Tab disabled>Disabled Tab</Tab>
      <Tab item="tab-3">Tab 3</Tab>
    </TabList>
    <TabPanel item="tab-1">Tab 1 content</TabPanel>
    <TabPanel item="tab-2">Tab 2 content</TabPanel>
    <TabPanel item="tab-3">Tab 3 content</TabPanel>
  </Tabs>
</ThemeProvider>;
```
