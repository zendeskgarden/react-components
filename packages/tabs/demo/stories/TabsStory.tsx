/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { ITabsProps, Tab, TabList, TabPanel, Tabs } from '@zendeskgarden/react-tabs';
import { ITab } from './types';

interface IArgs extends ITabsProps {
  tabs: ITab[];
}

export const TabsStory: Story<IArgs> = ({ tabs, ...args }) => (
  <Tabs {...args}>
    <TabList>
      {tabs.map(tab => (
        <Tab key={tab.value} item={tab.value} disabled={tab.disabled}>
          {tab.value}
        </Tab>
      ))}
    </TabList>
    {tabs.map(tab => (
      <TabPanel key={tab.value} item={tab.value}>
        {tab.panel}
      </TabPanel>
    ))}
  </Tabs>
);
