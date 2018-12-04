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
/**
 * Include tabs styling at the root of your application
 */
import '@zendeskgarden/react-tabs/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';

initialState = { selectedKey: 'tab-1' };

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
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
  </Tabs>
</ThemeProvider>;
```
