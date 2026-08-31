/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { InputGroup, Input, VALIDATION } from '@zendeskgarden/react-forms';
import { InputGroupStory } from './stories/InputGroupStory';
import {
  InputGroupUnifiedStory,
  UNIFIED_ICON_ITEMS,
  UNIFIED_TEXT_ITEMS
} from './stories/InputGroupUnifiedStory';
import { InputGroupClearableStory } from './stories/InputGroupClearableStory';
import { INPUT_GROUP_ITEMS as ITEMS } from './stories/data';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';

export default {
  title: 'Packages/Forms/InputGroup',
  component: InputGroup,
  subcomponents: {
    Input,
    ...fieldSubcomponents
  }
};

export const Example: StoryObj<typeof InputGroupStory> = {
  render: args => <InputGroupStory {...args} />,
  name: 'InputGroup',
  args: {
    ...commonArgs,
    items: ITEMS,
    isNeutral: true
  },
  argTypes: {
    items: { name: 'children' },

    ...commonArgTypes,
    disabled: {
      control: 'boolean',
      table: { category: 'Story' }
    },
    isNeutral: { table: { category: 'Button' } },
    isPrimary: {
      control: 'boolean',
      table: { category: 'Button' }
    },
    isDanger: {
      control: 'boolean',
      table: { category: 'Button' }
    },
    isToggle: {
      control: 'boolean',
      name: 'ToggleButton',
      table: { category: 'Button' }
    },
    readOnly: {
      control: 'boolean',
      table: { category: 'Input' }
    },
    inputValidation: {
      control: 'radio',
      name: 'validation',
      options: VALIDATION,
      table: { category: 'Input' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20265'
    }
  }
};

/* ------------------------------------------------------------------------ */
/* Unified variants — self-contained; nothing above this section is         */
/* modified. To remove: delete this section, the InputGroupUnifiedStory and */
/* InputGroupClearableStory imports above, and their demo/stories files.    */
/* ------------------------------------------------------------------------ */

const unifiedArgTypes = {
  items: { name: 'children' },
  ...commonArgTypes,
  disabled: {
    control: 'boolean' as const,
    table: { category: 'Story' }
  },
  isNeutral: { table: { category: 'Button' } },
  isPrimary: {
    control: 'boolean' as const,
    table: { category: 'Button' }
  },
  isDanger: {
    control: 'boolean' as const,
    table: { category: 'Button' }
  },
  isToggle: {
    control: 'boolean' as const,
    name: 'ToggleButton',
    table: { category: 'Button' }
  },
  readOnly: {
    control: 'boolean' as const,
    table: { category: 'Input' }
  },
  inputValidation: {
    control: 'radio' as const,
    name: 'validation',
    options: VALIDATION,
    table: { category: 'Input' }
  }
};

type UnifiedStory = StoryObj<typeof InputGroupUnifiedStory>;

export const Unified: UnifiedStory = {
  render: args => <InputGroupUnifiedStory {...args} />,
  args: {
    ...commonArgs,
    items: UNIFIED_TEXT_ITEMS,
    isNeutral: true,
    isUnified: true
  },
  argTypes: unifiedArgTypes
};

export const UnifiedWithIconButtons: UnifiedStory = {
  render: args => <InputGroupUnifiedStory {...args} />,
  name: 'Unified with icon buttons',
  args: {
    ...commonArgs,
    items: UNIFIED_ICON_ITEMS,
    isNeutral: true,
    isUnified: true
  },
  argTypes: unifiedArgTypes
};

export const UnifiedCompact: UnifiedStory = {
  render: args => <InputGroupUnifiedStory {...args} />,
  name: 'Unified compact',
  args: {
    ...commonArgs,
    items: UNIFIED_ICON_ITEMS,
    isNeutral: true,
    isUnified: true,
    isCompact: true
  },
  argTypes: unifiedArgTypes
};

export const UnifiedStates: UnifiedStory = {
  render: args => <InputGroupUnifiedStory {...args} />,
  name: 'Unified states',
  args: {
    ...commonArgs,
    items: UNIFIED_ICON_ITEMS,
    isNeutral: true,
    isUnified: true,
    validation: 'error',
    inputValidation: 'error'
  },
  argTypes: unifiedArgTypes
};

/* untyped so isUnified/focusInset (InputGroup props leaking in via the shared meta's `component`, but unused by this layout-only outer group) can be disabled without an excess-property error */
const clearableArgTypes = {
  ...commonArgTypes,
  isUnified: { table: { disable: true } },
  focusInset: { table: { disable: true } },
  value: {
    control: 'text' as const,
    table: { category: 'ClearableInput' }
  },
  disabled: {
    control: 'boolean' as const,
    table: { category: 'ClearableInput' }
  },
  readOnly: {
    control: 'boolean' as const,
    table: { category: 'ClearableInput' }
  },
  isCompact: {
    control: 'boolean' as const,
    table: { category: 'ClearableInput' }
  },
  placeholder: {
    control: 'text' as const,
    table: { category: 'ClearableInput' }
  },
  clearButtonLabel: {
    control: 'text' as const,
    table: { category: 'ClearableInput' }
  }
};

export const ClearableWithCalendar: StoryObj<typeof InputGroupClearableStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      updateArgs({ value: event.target.value });

    return <InputGroupClearableStory {...args} onChange={handleChange} />;
  },
  name: 'Clearable with calendar',
  args: {
    ...commonArgs,
    label: 'Date',
    value: '3/5/2024',
    placeholder: 'Select a date',
    clearButtonLabel: 'Clear date'
  },
  argTypes: clearableArgTypes
};
