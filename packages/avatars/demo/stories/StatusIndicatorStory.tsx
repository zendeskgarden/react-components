/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { StatusIndicator, IStatusIndicatorProps } from '@zendeskgarden/react-avatars';

interface IArgs extends IStatusIndicatorProps {
  caption?: string;
  show?: string;
}

function renderCaption(
  caption: IArgs['caption'],
  show: IArgs['show'],
  type: IStatusIndicatorProps['type']
): string | null {
  switch (show) {
    case 'no caption':
      return null;
    case 'set caption':
      return caption || null;
    case 'default caption':
    default:
      switch (type) {
        case 'away':
          return 'Away';
        case 'transfers':
          return 'Transfers Only';
        case 'offline':
          return 'Offline';
        case 'available':
        default:
          return 'Online';
      }
  }
}

export const StatusIndicatorStory: Story<IArgs> = ({ caption, show, type, ...args }) => {
  return (
    <StatusIndicator type={type} {...args}>
      {renderCaption(caption, show, type)}
    </StatusIndicator>
  );
};
