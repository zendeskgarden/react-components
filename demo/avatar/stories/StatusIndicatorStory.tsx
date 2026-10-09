/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';

import { StatusIndicator, IStatusIndicatorProps } from '../../../src/index';

export const StatusIndicatorStory: StoryFn<IStatusIndicatorProps> = ({ ...args }) => {
  return <StatusIndicator {...args} />;
};
