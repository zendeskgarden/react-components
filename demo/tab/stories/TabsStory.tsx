/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ITabsProps, Tabs } from '../../../src/index';
import { ITab } from './types';

interface IArgs extends ITabsProps {
  tabs: ITab[];
}

export const TabsStory = ({ tabs, ...args }: IArgs) => (
  <Tabs {...args}>
    <Tabs.TabList>
      {tabs.map(tab => (
        <Tabs.Tab key={tab.value} item={tab.value} disabled={tab.disabled}>
          {tab.value}
        </Tabs.Tab>
      ))}
    </Tabs.TabList>
    {tabs.map(tab => (
      <Tabs.TabPanel key={tab.value} item={tab.value}>
        {tab.panel}
      </Tabs.TabPanel>
    ))}
  </Tabs>
);
