/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { ClearableInput, FileUpload } from '@zendeskgarden/react-forms';
import { FileUploadStory } from './stories/FileUploadStory';
import { DateFieldStory } from './stories/DateFieldStory';
import { commonArgs, commonArgTypes } from '../stories/common';
import { FILE_TYPES } from '../stories/data';

export default {
  title: 'Packages/Forms/[patterns]',
  component: FileUpload,
  subcomponents: {
    ClearableInput
  }
};

/* untyped so isDragging (a FileUpload-only arg leaking in via the shared meta's `component`) can be disabled without an excess-property error */
const dateFieldArgTypes = {
  ...commonArgTypes,
  isDragging: { table: { disable: true } },
  isUnified: { table: { disable: true } },
  isCompact: {
    control: 'boolean' as const,
    table: { category: 'Date Picker' }
  },
  value: {
    control: 'text' as const,
    table: { category: 'ClearableInput' }
  },
  disabled: {
    control: 'boolean' as const,
    table: { category: 'Date Picker' }
  },
  readOnly: {
    control: 'boolean' as const,
    table: { category: 'Date Picker' }
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

export const DateField: StoryObj<typeof DateFieldStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      updateArgs({ value: event.target.value });

    return <DateFieldStory {...args} onChange={handleChange} />;
  },
  name: 'Date field',
  args: {
    ...commonArgs,
    label: 'Employee start date',
    value: 'March 5, 2024',
    clearButtonLabel: 'Clear: Employee start date',
    hint: 'Accepted formats: "M/D/YYYY", "Mon D, YYYY", or "Month D, YYYY"',
    hasMessage: false
  },
  argTypes: dateFieldArgTypes
};

export const Example: StoryObj<typeof FileUploadStory> = {
  render: args => <FileUploadStory {...args} />,
  name: 'File upload',
  args: {
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': []
    },
    multiple: true,
    type: 'image'
  },
  argTypes: {
    isDragging: {
      table: { disable: true }
    },
    accept: { table: { category: 'Dropzone' } },
    maxFiles: {
      control: 'number',
      table: { category: 'Dropzone' }
    },
    maxSize: {
      control: 'number',
      table: { category: 'Dropzone' }
    },
    minSize: {
      control: 'number',
      table: { category: 'Dropzone' }
    },
    multiple: { table: { category: 'Dropzone' } },
    type: {
      control: {
        type: 'select',
        options: FILE_TYPES
      },
      table: { category: 'File' }
    }
  }
};
