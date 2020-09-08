/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';

export default {
  title: 'Components/Tabs',
  subcomponents: { Tabs, TabList, Tab, TabPanel },
  argTypes: {
    orientation: {
      control: {
        type: 'inline-radio',
        options: ['vertical', 'horizontal']
      }
    }
  }
} as Meta;

interface IStoryProps {
  orientation: 'vertical' | 'horizontal';
  disabled: boolean;
}

export const Default: Story<IStoryProps> = ({ orientation, disabled }) => {
  const [tab, setTab] = useState('elm');

  return (
    <Tabs
      isVertical={orientation === 'vertical'}
      selectedItem={tab}
      onChange={newTab => {
        action('test');
        setTab(newTab);
      }}
    >
      <TabList>
        <Tab item="elm">Elm</Tab>
        <Tab item="sugar-maple" disabled={disabled}>
          Sugar Maple
        </Tab>
        <Tab item="dogwood">Sugar</Tab>
      </TabList>
      <TabPanel item="elm">
        Elms are deciduous and semi-deciduous trees comprising the flowering plant genus Ulmus in
        the plant family Ulmaceae.
      </TabPanel>
      <TabPanel item="sugar-maple">
        The sugar maple is one of America’s most-loved trees. In fact, more states have claimed it
        as their state tree than any other single species—for New York, West Virginia, Wisconsin,
        and Vermont, the maple tree stands alone.
      </TabPanel>
      <TabPanel item="dogwood">
        Cornus is a genus of about 30–60 species of woody plants in the family Cornaceae, commonly
        known as dogwoods, which can generally be distinguished by their blossoms, berries, and
        distinctive bark.
      </TabPanel>
    </Tabs>
  );
};

Default.args = {
  orientation: 'horizontal',
  disabled: false
};
