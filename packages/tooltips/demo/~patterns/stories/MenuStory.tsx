/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { StoryFn } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Grid } from '@zendeskgarden/react-grid';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';
import { ITooltipProps, Tooltip } from '@zendeskgarden/react-tooltips';
import { IButtonProps, IconButton } from '@zendeskgarden/react-buttons';

interface IMenuButtonProps extends IButtonProps {
  placement: IMenuProps['placement'];
}

const MenuButton = forwardRef<HTMLButtonElement, IMenuButtonProps>(
  ({ placement, ...props }, ref) => (
    <Tooltip content="Menu" placement={placement}>
      <IconButton {...props} ref={ref}>
        <Icon />
      </IconButton>
    </Tooltip>
  )
);

MenuButton.displayName = 'MenuButton';

export const MenuStory: StoryFn<ITooltipProps> = ({ placement }) => {
  return (
    <Grid>
      <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col textAlign="center" alignSelf="center">
          <Menu
            button={
              /* eslint-disable-next-line react/no-unstable-nested-components */
              props => <MenuButton placement={placement} {...props} />
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
};
