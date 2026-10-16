/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Notification, INotificationProps } from '../../../src/index';

interface IArgs extends INotificationProps {
  title?: string;
  isRegular?: boolean;
  hasClose: boolean;
  hasParagraph: boolean;
}

export const NotificationStory = ({
  children,
  title,
  hasClose,
  hasParagraph,
  isRegular,
  'aria-label': ariaLabel,
  ...args
}: IArgs) => (
  <Notification {...args}>
    {!!title && <Notification.Title isRegular={isRegular}>{title}</Notification.Title>}
    {hasParagraph ? <Notification.Paragraph>{children}</Notification.Paragraph> : children}
    {!!hasClose && <Notification.Close aria-label={ariaLabel} />}
  </Notification>
);
