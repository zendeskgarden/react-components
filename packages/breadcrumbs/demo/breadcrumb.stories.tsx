import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { BreadcrumbStory } from './stories/BreadcrumbStory';
import { BREADCRUMB_CHILDREN as CHILDREN } from './stories/data';

export default {
  title: 'Packages/Breadcrumbs/Breadcrumb',
  component: Breadcrumb
};

export const Breadcrumb: StoryObj<typeof BreadcrumbStory> = {
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
