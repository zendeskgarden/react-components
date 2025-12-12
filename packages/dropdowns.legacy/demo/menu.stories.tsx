import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Downshift from 'downshift';
import {
  AddItem,
  Dropdown,
  HeaderIcon,
  HeaderItem,
  Item,
  ItemMeta,
  MediaBody,
  MediaFigure,
  MediaItem,
  Menu,
  NextItem,
  PreviousItem,
  Separator,
  Trigger
} from '@zendeskgarden/react-dropdowns.legacy';
import { TriggerStory } from './stories/TriggerStory';
import { MENU_ITEMS as ITEMS } from './stories/data';

export default {
  title: 'Packages/Dropdowns.Legacy/Menu',
  component: Menu,

  subcomponents: {
    AddItem,
    Dropdown,
    HeaderIcon,
    HeaderItem,
    Item,
    ItemMeta,
    MediaBody,
    MediaFigure,
    MediaItem,
    Menu,
    NextItem,
    PreviousItem,
    Separator,
    Trigger
  }
};

export const Menu: StoryObj<typeof TriggerStory> = {
  /*account for Storybook control*/
  render: args => {
    const updateArgs = useArgs()[1];

    const handleSelect = selectedItems =>
      updateArgs({
        selectedItems
      });

    const handleStateChange = changes =>
      changes.hasOwnProperty('isOpen') &&
      changes.type !== Downshift.stateChangeTypes.blurInput &&
      updateArgs({
        isOpen: changes.isOpen
      });

    return <TriggerStory {...args} onSelect={handleSelect} onStateChange={handleStateChange} />;
  },

  name: 'Menu',

  args: {
    eventsEnabled: true,
    isAnimated: true,
    items: ITEMS,
    selectedItems: [ITEMS[5]],
    hasMedia: false,
    isOpen: false
  },

  argTypes: {
    downshiftProps: {
      control: 'object',

      table: {
        category: 'Dropdown'
      }
    },

    highlightedIndex: {
      control: 'number',

      table: {
        category: 'Dropdown'
      }
    },

    isOpen: {
      table: {
        category: 'Dropdown'
      }
    },

    selectedItems: {
      table: {
        category: 'Dropdown'
      }
    },

    disabled: {
      control: 'boolean',

      table: {
        category: 'Item'
      }
    },

    isDanger: {
      control: 'boolean',

      table: {
        category: 'Item'
      }
    },

    hasMedia: {
      table: {
        category: 'Story'
      }
    },

    items: {
      name: 'Item[]',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: [
      {
        name: 'Menu',
        allowFullscreen: true,
        type: 'figma',
        url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=254%3A1241'
      },
      {
        name: 'Item',
        allowFullscreen: true,
        type: 'figma',
        url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1488%3A28208'
      }
    ]
  }
};
