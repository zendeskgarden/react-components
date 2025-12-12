/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Combobox, Field, Option, OptGroup, Tag } from '@zendeskgarden/react-dropdowns';
import { ComboboxStory } from './stories/ComboboxStory';
import { OPTIONS } from './stories/data';
type Story = StoryObj<typeof ComboboxStory>;

export default {
  title: 'Packages/Dropdowns/Combobox',
  component: Combobox,

  subcomponents: {
    Field,
    'Field.Hint': Field.Hint,
    'Field.Label': Field.Label,
    'Field.Message': Field.Message,
    Option,
    'Option.Meta': Option.Meta,
    OptGroup,
    Tag,
    'Tag.Avatar': Tag.Avatar
  },

  args: {
    label: 'Label',
    isLabelRegular: false,
    isLabelHidden: false,
    hint: 'Hint',
    startIcon: false,
    renderValue: false,
    endIcon: false,
    listboxAriaLabel: 'Label',
    message: 'Message',
    validationLabel: 'Label',
    isEditable: true,
    listboxMaxHeight: '400px',
    listboxZIndex: 1000,
    options: OPTIONS
  },

  argTypes: {
    label: {
      name: 'children',

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

    startIcon: {
      control: 'boolean'
    },

    renderValue: {
      control: 'boolean'
    },

    endIcon: {
      control: 'boolean'
    },

    appendListboxToNode: {
      control: false
    },

    message: {
      name: 'children',

      table: {
        category: 'Message'
      }
    },

    validationLabel: {
      table: {
        category: 'Message'
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

export const Uncontrolled: Story = {
  render: args => <ComboboxStory {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    activeIndex: {
      control: false
    },

    inputValue: {
      control: false
    },

    isExpanded: {
      control: false
    },

    selectionValue: {
      control: false
    }
  }
};

export const Controlled: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (changes: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...restArgs } = changes;

      updateArgs(restArgs);
    };

    return <ComboboxStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    isExpanded: false,
    inputValue: '',
    activeIndex: -1,
    selectionValue: null
  },

  argTypes: {
    defaultExpanded: {
      control: false
    },

    selectionValue: {
      control: false
    }
  }
};
