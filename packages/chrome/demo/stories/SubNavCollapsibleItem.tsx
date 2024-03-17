/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { Grid } from '@zendeskgarden/react-grid';
import { SubNav, ICollapsibleSubNavItemProps } from '@zendeskgarden/react-chrome';
import { COLLAPSIBLE_SUB_NAV_ITEM } from './types';

interface IArgs extends ICollapsibleSubNavItemProps {
  items: COLLAPSIBLE_SUB_NAV_ITEM[];
}

export const SubNavCollapsibleItem: StoryFn<IArgs> = ({ items, ...args }) => {
  const [current, setCurrent] = useState<number | undefined>();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col sm={6}>
          <SubNav.CollapsibleItem {...args}>
            {items.map((item, index) => (
              <SubNav.Item
                key={index}
                isCurrent={current === index}
                onClick={() => setCurrent(index)}
              >
                {item}
              </SubNav.Item>
            ))}
          </SubNav.CollapsibleItem>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
