/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { StatusIndicator, IStatusIndicatorProps } from '@zendeskgarden/react-avatars';

export const StatusIndicatorStory: Story<IStatusIndicatorProps> = ({ ...args }) => {
  return <StatusIndicator {...args} />;
};
