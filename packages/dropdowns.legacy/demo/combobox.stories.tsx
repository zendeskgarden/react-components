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
  Combobox,
  Dropdown,
  Field,
  Hint,
  Label,
  Menu,
  Message
} from '@zendeskgarden/react-dropdowns.legacy';
import { ComboboxStory } from './stories/ComboboxStory';
import { COMBOBOX_ITEMS as ITEMS, DROPDOWN_PLACEMENT as PLACEMENT } from './stories/data';

export default {
  title: 'Packages/Dropdowns.Legacy/Combobox',
  component: Combobox,

  subcomponents: {
    Dropdown,
    Field,
    Hint,
    Label,
    Menu,
    Message
  }
};

export const Default: StoryObj<typeof ComboboxStory> = {
  /*account for Storybook control*/
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleInputValueChange = (inputValue: any) =>
      updateArgs({
        inputValue
      });

    const handleStateChange = ({ highlightedIndex, ...changes }: any) => {
      Number.isInteger(highlightedIndex) &&
        updateArgs({
          inputValue: args.items[highlightedIndex].text
        });

      Object.prototype.hasOwnProperty.call(changes, 'isOpen') &&
        ![Downshift.stateChangeTypes.blurButton, Downshift.stateChangeTypes.blurInput].includes(
          changes.type
        ) &&
        updateArgs({
          isOpen: changes.isOpen
        });
    };

    return (
      <ComboboxStory
        {...args}
        onInputValueChange={handleInputValueChange}
        onStateChange={handleStateChange}
      />
    );
  },

  name: 'Combobox',

  args: {
    label: 'Label',
    isLabelRegular: false,
    isLabelHidden: false,
    hasHint: true,
    hint: 'Hint',
    hasMessage: true,
    message: 'Message',
    hasStartIcon: false,
    hasEndIcon: false,
    items: ITEMS,
    inputValue: '',
    isOpen: false
  },

  argTypes: {
    hasStartIcon: {
      name: 'start'
    },

    hasEndIcon: {
      name: 'end'
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
      control: 'object',

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
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24482'
    }
  }
};
