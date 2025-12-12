import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { DatePicker } from '@zendeskgarden/react-datepickers';
import { DatePickerStory } from './stories/DatePickerStory';
import { DATE_STYLE_OPTIONS } from './stories/data';

export default {
  title: 'Packages/Datepickers/DatePicker',
  component: DatePicker
};

export const DatePicker: StoryObj<typeof DatePickerStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = value =>
      updateArgs({
        value
      });

    return <DatePickerStory {...args} onChange={handleChange} />;
  },

  name: 'DatePicker',

  args: {
    dateStyle: DATE_STYLE_OPTIONS[1],
    eventsEnabled: true,
    isAnimated: true,
    message: 'Message'
  },

  argTypes: {
    appendToNode: {
      control: false
    },

    value: {
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
    },

    hasMessage: {
      name: 'Message',

      control: {
        type: 'boolean'
      },

      table: 'Story'
    },

    message: {
      name: 'children',

      control: {
        type: 'text'
      },

      table: {
        category: 'Message'
      }
    },

    validation: {
      options: ['success', 'warning', 'error'],

      control: {
        type: 'radio'
      },

      table: {
        category: 'Input'
      }
    },

    validationLabel: {
      control: {
        type: 'text'
      },

      table: {
        category: 'Message'
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
