/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { {{capitalize component}}, I{{capitalize component}}Props } from '@zendeskgarden/react-{{pluralize (lowercase component)}}';

interface IArgs extends I{{capitalize component}}Props {
  // Add additional args here
}

export const {{capitalize component}}Story: StoryFn<IArgs> = ({ children, ...args }) => (
  <{{capitalize component}} {...args}>{children}</{{capitalize component}}>
);
