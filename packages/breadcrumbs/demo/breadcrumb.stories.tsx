/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { BreadcrumbStory } from './stories/BreadcrumbStory';
import { BREADCRUMB_CHILDREN as CHILDREN } from './stories/data';

export default {
  title: 'Packages/Breadcrumbs/Breadcrumb',
  component: Breadcrumb
};

export const Example: StoryObj<typeof BreadcrumbStory> = {
  render: args => <BreadcrumbStory {...args} />,
  name: 'Breadcrumb',

  args: {
    'aria-label': 'Breadcrumbs',
    children: CHILDREN
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=171%3A13406'
    }
  }
};
