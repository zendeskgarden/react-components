import React from 'react';
import { DragAndDropStory } from './stories/DragAndDropStory';
import { COLUMNS as columns } from './stories/data';

export default {
  title: 'Packages/Draggable/[patterns]'
};

export const DragAndDrop = {
  render: (args: any) => <DragAndDropStory {...args} />,
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
