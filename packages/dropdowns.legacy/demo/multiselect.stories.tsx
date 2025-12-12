/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Downshift from 'downshift';
import {
  Multiselect,
  Dropdown,
  Field,
  Hint,
  Label,
  Menu,
  Message
} from '@zendeskgarden/react-dropdowns.legacy';
import { MultiselectStory } from './stories/MultiselectStory';
import { MULTISELECT_ITEMS as ITEMS, DROPDOWN_PLACEMENT as PLACEMENT } from './stories/data';

export default {
  title: 'Packages/Dropdowns.Legacy/Multiselect',
  component: Multiselect,

  subcomponents: {
    Dropdown,
    Field,
    Hint,
    Label,
    Menu,
    Message
  }
};

export const Default: StoryObj<typeof MultiselectStory> = {
  /*account for Storybook control*/
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleSelect = (selectedItems: any) =>
      updateArgs({
        selectedItems
      });

    const handleInputValueChange = (inputValue: any) =>
      updateArgs({
        inputValue
      });

    const handleStateChange = (changes: any) =>
      Object.prototype.hasOwnProperty.call(changes, 'isOpen') &&
      ![Downshift.stateChangeTypes.blurButton, Downshift.stateChangeTypes.blurInput].includes(
        changes.type
      ) &&
      updateArgs({
        isOpen: changes.isOpen
      });

    return (
      <MultiselectStory
        {...args}
        onSelect={handleSelect}
        onInputValueChange={handleInputValueChange}
        onStateChange={handleStateChange}
      />
    );
  },

  name: 'Multiselect',

  args: {
    label: 'Label',
    isLabelRegular: false,
    isLabelHidden: false,
    hasHint: true,
    hint: 'Hint',
    hasMessage: true,
    message: 'Message',
    hasIcon: false,
    maxItems: 4,
    items: ITEMS,
    selectedItems: [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3], ITEMS[4], ITEMS[5]],
    inputValue: '',
    isOpen: false,

    downshiftProps: {
      defaultHighlightedIndex: 0
    }
  },

  argTypes: {
    hasIcon: {
      name: 'start'
    },

    placeholder: {
      control: 'text'
    },

    showMore: {
      name: 'renderShowMore',
      control: 'text'
    },

    label: {
      name: 'children',

      table: {
        category: 'Label'
      }
    },

    isLabelRegular: {
      name: 'isRegular',

      table: {
        category: 'Label'
      }
    },

    isLabelHidden: {
      name: 'hidden',

      table: {
        category: 'Label'
      }
    },

    hint: {
      name: 'children',

      table: {
        category: 'Hint'
      }
    },

    message: {
      name: 'children',

      table: {
        category: 'Message'
      }
    },

    validationLabel: {
      control: {
        type: 'text'
      },

      table: {
        category: 'Message'
      }
    },

    hasHint: {
      name: 'Hint',

      table: {
        category: 'Story'
      }
    },

    hasMessage: {
      name: 'Message',

      table: {
        category: 'Story'
      }
    },

    items: {
      name: 'Item[]',

      table: {
        category: 'Story'
      }
    },

    downshiftProps: {
      table: {
        category: 'Dropdown'
      }
    },

    selectedItems: {
      table: {
        category: 'Dropdown'
      }
    },

    inputValue: {
      table: {
        category: 'Dropdown'
      }
    },

    isOpen: {
      table: {
        category: 'Dropdown'
      }
    },

    placement: {
      control: {
        type: 'radio',
        options: PLACEMENT
      },

      table: {
        category: 'Menu'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1512%3A29763'
    }
  }
};
