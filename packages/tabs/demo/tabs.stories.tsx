/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Tabs } from '@zendeskgarden/react-tabs';
import { TabsStory } from './stories/TabsStory';
import { TABS } from './stories/data';
type Story = StoryObj<typeof TabsStory>;

export default {
  title: 'Packages/Tabs/Tabs',
  component: Tabs,

  subcomponents: {
    'Tabs.Tab': Tabs.Tab,
    'Tabs.TabList': Tabs.TabList,
    'Tabs.TabPanel': Tabs.TabPanel
  },

  args: {
    tabs: TABS
  },

  argTypes: {
    tabs: {
      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A123'
    }
  }
};

export const Uncontrolled: Story = {
  render: (args: any) => <TabsStory {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    selectedItem: {
      control: false
    }
  }
};

export const Controlled: Story = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (selectedItem: any) =>
      updateArgs({
        selectedItem
      });

    return <TabsStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled'
};
