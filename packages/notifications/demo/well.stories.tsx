/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Well } from '@zendeskgarden/react-notifications';
import { WellStory } from './stories/WellStory';

export default {
  title: 'Packages/Notifications/Well',
  component: Well,

  subcomponents: {
    'Well.Paragraph': Well.Paragraph,
    'Well.Title': Well.Title
  }
};

export const Default: StoryObj<typeof WellStory> = {
  render: args => <WellStory {...args} />,
  name: 'Well',
  args: {
    children: 'Text',
    title: 'Title',
    hasParagraph: false
  },

  argTypes: {
    title: {
      name: 'children',

      table: {
        category: 'Well.Title'
      }
    },

    isRegular: {
      control: {
        type: 'boolean'
      },

      table: {
        category: 'Well.Title'
      }
    },

    hasParagraph: {
      name: 'Well.Paragraph',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24694'
    }
  }
};
