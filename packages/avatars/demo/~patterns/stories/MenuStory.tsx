/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { StoryFn } from '@storybook/react';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';
import { Avatar, IAvatarProps } from '@zendeskgarden/react-avatars';
import { useTheme } from 'styled-components';

const items: {
  value: string;
  label: string;
  avatarProps: IAvatarProps;
}[] = [
  {
    value: 'linden',
    label: 'Linden',
    avatarProps: {
      status: 'away',
      badge: undefined
    }
  },
  {
    value: 'reed',
    label: 'Reed',
    avatarProps: {
      status: 'available',
      badge: undefined
    }
  },
  {
    value: 'sage',
    label: 'Sage',
    avatarProps: {
      status: undefined,
      badge: '3'
    }
  }
];

export const MenuStory: StoryFn = ({ isCompact }) => {
  const [highlightedValue, setHighlightedValue] = useState<string | null>();
  const theme = useTheme();
  const surfaceColor = getColor({ variable: 'background.raised', theme });
  const highlightedColor = getColor({ variable: 'background.primary', theme });

  const onChange = useCallback(({ focusedValue }: { focusedValue?: string | null }) => {
    focusedValue !== undefined && setHighlightedValue(focusedValue);
  }, []);

  return (
    <Grid>
      <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col textAlign="center" alignSelf="center">
          <Menu button="Demo" isCompact={isCompact} onChange={onChange}>
            {items.map(item => (
              <Item
                key={item.value}
                value={item.value}
                icon={
                  <Avatar
                    size={isCompact ? 'extraextrasmall' : 'small'}
                    status={item.avatarProps.status}
                    badge={item.avatarProps.badge}
                    surfaceColor={highlightedValue === item.value ? highlightedColor : surfaceColor}
                  >
                    <img alt={item.label} src={`images/avatars/${item.value}.png`} />
                  </Avatar>
                }
              >
                {item.label}
                <Item.Meta>{item.value}@zendesk.garden</Item.Meta>
              </Item>
            ))}
          </Menu>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
