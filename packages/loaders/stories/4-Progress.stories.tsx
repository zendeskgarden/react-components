/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Progress, IProgressProps } from '@zendeskgarden/react-loaders';

export default {
  title: 'Components/Loaders/Progress',
  component: Progress
} as Meta;

export const Default: Story<IProgressProps> = ({ color, size, value }) => {
  return <Progress color={color} size={size} value={value} />;
};

Default.argTypes = {
  value: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  color: { control: 'color' }
};

Default.args = {
  size: 'medium',
  value: 25,
  color: undefined
};
