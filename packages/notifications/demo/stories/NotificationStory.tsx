/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import {
  Notification,
  Close,
  INotificationProps,
  Title,
  Paragraph
} from '@zendeskgarden/react-notifications';

interface IArgs extends INotificationProps {
  title?: string;
  isRegular?: boolean;
  hasClose: boolean;
  hasParagraph: boolean;
}

export const NotificationStory: Story<IArgs> = ({
  children,
  title,
  hasClose,
  hasParagraph,
  isRegular,
  'aria-label': ariaLabel,
  ...args
}) => (
  <Notification {...args}>
    {title && <Title isRegular={isRegular}>{title}</Title>}
    {hasParagraph ? <Paragraph>{children}</Paragraph> : children}
    {hasClose && <Close aria-label={ariaLabel} />}
  </Notification>
);
