/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Button, ChevronButton, IButtonProps, SplitButton } from '@zendeskgarden/react-buttons';

interface IArgs extends IButtonProps {
  isRotated?: boolean;
}

export const SplitButtonStory: Story<IArgs> = ({
  children,
  'aria-label': ariaLabel,
  isRotated,
  ...args
}) => (
  <SplitButton>
    <Button {...args}>{children}</Button>
    <ChevronButton aria-label={ariaLabel} isRotated={isRotated} {...args} />
  </SplitButton>
);
