/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import StartIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { Button, IButtonProps } from '@zendeskgarden/react-buttons';

interface IArgs extends IButtonProps {
  hasStartIcon: boolean;
  hasEndIcon: boolean;
  isStartIconRotated: boolean;
  isEndIconRotated: boolean;
}

export const ButtonStory: StoryFn<IArgs> = ({
  hasStartIcon,
  hasEndIcon,
  isStartIconRotated,
  isEndIconRotated,
  ...args
}) => (
  <Button {...args}>
    {!!hasStartIcon && (
      <Button.StartIcon isRotated={isStartIconRotated}>
        <StartIcon />
      </Button.StartIcon>
    )}
    {args.children}
    {!!hasEndIcon && (
      <Button.EndIcon isRotated={isEndIconRotated}>
        <EndIcon />
      </Button.EndIcon>
    )}
  </Button>
);
