/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import {
  Button,
  ChevronButton,
  ISplitButtonProps,
  SplitButton
} from '@zendeskgarden/react-buttons';

interface IArgs extends ISplitButtonProps {
  disabled?: boolean;
  isRotated?: boolean;
}

export const SplitButtonStory: StoryFn<IArgs> = ({
  children,
  'aria-label': ariaLabel,
  disabled,
  isRotated,
  ...args
}) => (
  <SplitButton {...args}>
    <Button disabled={disabled}>{children}</Button>
    <ChevronButton aria-label={ariaLabel} disabled={disabled} isRotated={isRotated} />
  </SplitButton>
);
