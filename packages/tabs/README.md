# @zendeskgarden/react-tabs [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tabs)](https://www.npmjs.com/package/@zendeskgarden/react-tabs)

This package includes several varieties of Tabs relating to
the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tabs

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import React, { useState } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tabs } from '@zendeskgarden/react-tabs';

const Example = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  /**
   * Place a `ThemeProvider` at the root of your React application
   */
  return (
    <ThemeProvider>
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <Tabs.TabList>
          <Tabs.Tab item="tab-1">Tab 1</Tabs.Tab>
          <Tabs.Tab item="tab-2">Tab 2</Tabs.Tab>
          <Tabs.Tab disabled>Disabled Tab</Tabs.Tab>
          <Tabs.Tab item="tab-3">Tab 3</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="tab-1">Tab 1 content</Tabs.TabPanel>
        <Tabs.TabPanel item="tab-2">Tab 2 content</Tabs.TabPanel>
        <Tabs.TabPanel item="tab-3">Tab 3 content</Tabs.TabPanel>
      </Tabs>
    </ThemeProvider>
  );
};
```
