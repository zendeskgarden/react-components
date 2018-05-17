# @zendeskgarden/react-tabs [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tabs.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tabs) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/tabs&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/tabs) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

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
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Tabs from '@zendeskgarden/react-tabs/Tabs';
import TabPanel from '@zendeskgarden/react-tabs/TabPanel';

initialState = { selectedKey: 'Tab 1' };

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tabs selectedKey={state.selected} onChange={setState}>
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
