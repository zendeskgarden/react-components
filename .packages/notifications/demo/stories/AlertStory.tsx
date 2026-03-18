/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Alert, IAlertProps } from '@zendeskgarden/react-notifications';
import React from 'react';

interface IArgs extends IAlertProps {
  title?: string;
  isRegular?: boolean;
  hasClose: boolean;
  hasParagraph: boolean;
}

export const AlertStory: StoryFn<IArgs> = ({
  children,
  title,
  hasClose,
  hasParagraph,
  isRegular,
  'aria-label': ariaLabel,
  ...args
}) => (
  <Alert {...args}>
    {!!title && <Alert.Title isRegular={isRegular}>{title}</Alert.Title>}
    {hasParagraph ? <Alert.Paragraph>{children}</Alert.Paragraph> : children}
    {!!hasClose && <Alert.Close aria-label={ariaLabel} />}
  </Alert>
);
