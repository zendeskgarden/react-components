/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import BookmarkIcon from '@zendeskgarden/svg-icons/src/bookmark-stroke.svg';
import { CSSProperties } from 'react';

import { ITabsProps, Tabs, Tag } from '../../../src/index';
import { ITab } from './types';

interface IArgs extends ITabsProps {
  tabs: ITab[];
  tabCount: number;
  hasIcon: boolean;
  hasTag: boolean;
  hasDisabled: boolean;
  tabListStyle?: CSSProperties;
}

export const TabsStory = ({
  tabs,
  tabCount,
  hasIcon,
  hasTag,
  hasDisabled,
  tabListStyle,
  ...args
}: IArgs) => {
  const visibleTabs = tabs.slice(0, tabCount);

  return (
    <Tabs {...args}>
      <Tabs.TabList style={tabListStyle}>
        {visibleTabs.map((tab, index) => (
          <Tabs.Tab
            key={tab.value}
            item={tab.value}
            disabled={tab.disabled || (hasDisabled && index === 2)}
            icon={hasIcon ? <BookmarkIcon /> : undefined}
            label={hasTag && index === 1 ? tab.value : undefined}
          >
            {tab.value}
            {hasTag && index === 1 ? (
              <Tag>
                <span>9</span>
              </Tag>
            ) : null}
          </Tabs.Tab>
        ))}
      </Tabs.TabList>
      {visibleTabs.map(tab => (
        <Tabs.TabPanel key={tab.value} item={tab.value}>
          {tab.panel}
        </Tabs.TabPanel>
      ))}
    </Tabs>
  );
};
