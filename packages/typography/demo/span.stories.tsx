import { Span } from '@zendeskgarden/react-typography';
import { SpanStory } from './stories/SpanStory';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Span',
  component: Span,

  subcomponents: {
    'Span.Icon': Span.Icon,
    'Span.StartIcon': Span.StartIcon
  }
};

export const Span = {
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
