import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Span } from '@zendeskgarden/react-typography';
import { SpanStory } from './stories/SpanStory';

export default {
  title: 'Packages/Typography/Span',
  component: Span,

  subcomponents: {
    'Span.Icon': Span.Icon,
    'Span.StartIcon': Span.StartIcon
  }
};

export const Span: StoryObj<typeof SpanStory> = {
  render: args => <SpanStory {...args} />,
  name: 'Span',

  args: {
    children: 'Text',
    hasIcon: false,
    hasStartIcon: false
  },

  argTypes: {
    hidden: {
      control: 'boolean'
    },

    hue: {
      control: 'color'
    },

    tag: {
      control: 'text'
    },

    hasIcon: {
      name: 'Span.Icon',

      table: {
        category: 'Story'
      }
    },

    hasStartIcon: {
      name: 'Span.StartIcon',

      table: {
        category: 'Story'
      }
    }
  }
};
