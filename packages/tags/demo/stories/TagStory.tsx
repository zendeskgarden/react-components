/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { ITagProps, Tag } from '@zendeskgarden/react-tags';

export interface IArgs extends ITagProps {
  hasAvatar: boolean;
  hasClose: boolean;
  closeAriaLabel: string;
}

export const TagStory: Story<IArgs> = ({
  children,
  hasAvatar,
  hasClose,
  closeAriaLabel,
  ...args
}) => {
  const ariaLabel = closeAriaLabel ? { 'aria-label': closeAriaLabel } : {};

  return (
    <Tag {...args} tabIndex={hasClose ? 0 : args.tabIndex}>
      {hasAvatar && (
        <Tag.Avatar>
          <img alt="" src={`images/avatars/${args.isPill ? 'user' : 'system'}.png`} />
        </Tag.Avatar>
      )}
      {children}
      {hasClose && <Tag.Close {...ariaLabel} />}
    </Tag>
  );
};
