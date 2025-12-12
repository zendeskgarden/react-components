/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { DragAndDropStory } from './stories/DragAndDropStory';
import { COLUMNS as columns } from './stories/data';

export default {
  title: 'Packages/Draggable/[patterns]'
};

export const DragAndDrop: StoryObj<typeof DragAndDropStory> = {
  render: args => <DragAndDropStory {...args} />,
  name: 'Drag and drop',

  args: {
    columns,
    hasDropIndicator: true,
    hasPlaceholder: true,
    isCompact: false,
    isHorizontal: false,
    isBare: false
  },

  argTypes: {
    columns: {
      table: {
        category: 'Story'
      }
    },

    hasDropIndicator: {
      table: {
        category: 'Story'
      }
    },

    hasPlaceholder: {
      table: {
        category: 'Story'
      }
    },

    isCompact: {
      table: {
        category: 'Story'
      }
    },

    isHorizontal: {
      table: {
        category: 'Story'
      }
    },

    isBare: {
      table: {
        category: 'Story'
      }
    }
  }
};
