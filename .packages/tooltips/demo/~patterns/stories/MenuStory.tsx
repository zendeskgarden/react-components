/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { IButtonProps, IconButton } from '@zendeskgarden/react-buttons';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';
import { useDocument } from '@zendeskgarden/react-theming';
import { ITooltipProps, Tooltip } from '@zendeskgarden/react-tooltips';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import React, { forwardRef } from 'react';
import { useTheme } from 'styled-components';

interface IMenuButtonProps extends IButtonProps {
  appendToNode: boolean;
  placement: IMenuProps['placement'];
}

const MenuButton = forwardRef<HTMLButtonElement, IMenuButtonProps>(
  ({ appendToNode, placement, ...props }, ref) => {
    const theme = useTheme();
    const body = useDocument(theme)?.body;

    return (
      <Tooltip content="Menu" placement={placement} appendToNode={appendToNode ? body : undefined}>
        <IconButton {...props} ref={ref}>
          <Icon />
        </IconButton>
      </Tooltip>
    );
  }
);

MenuButton.displayName = 'MenuButton';

interface IArgs extends Omit<ITooltipProps, 'appendToNode'> {
  appendToNode: boolean;
}

export const MenuStory: StoryFn<IArgs> = ({ appendToNode, placement }) => (
  <Grid>
    <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
      <Grid.Col textAlign="center" alignSelf="center">
        <Menu
          button={
            /* eslint-disable-next-line react/no-unstable-nested-components */
            props => <MenuButton appendToNode={appendToNode} placement={placement} {...props} />
          }
          placement={placement}
        >
          <Item value="One" />
          <Item value="Two" />
          <Item value="Three" />
        </Menu>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
