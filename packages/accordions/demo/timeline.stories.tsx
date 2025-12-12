import { Timeline } from '@zendeskgarden/react-accordions';
import { TimelineStory } from './stories/TimelineStory';
import { TIMELINE_ITEMS as ITEMS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Accordions/Timeline',
  component: Timeline,

  subcomponents: {
    'Timeline.Content': Timeline.Content,
    'Timeline.Item': Timeline.Item,
    'Timeline.OppositeContent': Timeline.OppositeContent
  }
};

export const Timeline = {
  render: args => <TimelineStory {...args} />,
  name: 'Timeline',

  args: {
    hasIcon: false,
    hasOppositeContent: false,
    items: ITEMS
  },

  argTypes: {
    hasIcon: {
      name: 'icon',

      table: {
        category: 'Timeline.Item'
      }
    },

    surfaceColor: {
      name: 'surfaceColor',

      control: {
        type: 'color'
      },

      table: {
        category: 'Timeline.Item'
      }
    },

    hasOppositeContent: {
      name: 'Timeline.OppositeContent',

      table: {
        category: 'Story'
      }
    },

    items: {
      name: 'Timeline.Item[]',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=9806%3A43467'
    }
  }
};
