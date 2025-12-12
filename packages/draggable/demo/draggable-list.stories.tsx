/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { DraggableList } from '@zendeskgarden/react-draggable';
import { DraggableListStory } from './stories/DraggableListStory';
import { LIST_ITEMS as items } from './stories/data';

export default {
  title: 'Packages/Draggable/DraggableList',
  component: DraggableList,

  subcomponents: {
    'DraggableList.DropIndicator': DraggableList.DropIndicator,
    'DraggableList.Item': DraggableList.Item
  }
};

export const Default: StoryObj<typeof DraggableListStory> = {
  render: (args: any) => <DraggableListStory {...args} />,
  name: 'DraggableList',
  args: {
    items,
    'aria-label': 'Label'
  },

  argTypes: {
    items: {
      name: 'DraggableList.Item[]',

      table: {
        category: 'Story'
      }
    },

    indicatorIndex: {
      name: 'DraggableList.DropIndicator',

      control: {
        type: 'number'
      },

      table: {
        category: 'Story'
      }
    },

    'aria-label': {
      table: {
        category: 'DraggableList.DropIndicator'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=14015-52393'
    }
  }
};
