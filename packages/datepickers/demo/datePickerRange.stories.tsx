/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { DatePickerRangeStory } from './stories/DatePickerRangeStory';
import { DATE_STYLE_OPTIONS } from './stories/data';

export default {
  title: 'Packages/Datepickers/DatePickerRange',
  component: DatePickerRange,

  subcomponents: {
    'DatePickerRange.Calendar': DatePickerRange.Calendar,
    'DatePickerRange.End': DatePickerRange.End,
    'DatePickerRange.Start': DatePickerRange.Start
  }
};

export const Default: StoryObj<typeof DatePickerRangeStory> = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = ({ endValue, startValue }: any) =>
      updateArgs({
        endValue,
        startValue
      });

    return <DatePickerRangeStory {...args} onChange={handleChange} />;
  },

  name: 'DatePickerRange',

  args: {
    dateStyle: DATE_STYLE_OPTIONS[1]
  },

  argTypes: {
    startValue: {
      control: 'date'
    },

    endValue: {
      control: 'date'
    },

    minValue: {
      control: 'date'
    },

    maxValue: {
      control: 'date'
    },

    dateStyle: {
      control: 'radio',
      options: DATE_STYLE_OPTIONS,

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32'
    }
  }
};
