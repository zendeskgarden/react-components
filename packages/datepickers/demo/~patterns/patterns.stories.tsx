import { CalendarStory } from './stories/CalendarStory';

export default {
  title: 'Packages/DatePickers/[patterns]'
};

export const Calendar = {
  render: args => <CalendarStory {...args} />,
  name: 'Calendar',

  args: {
    appendToNode: false
  },

  argTypes: {
    appendToNode: {
      control: 'boolean'
    }
  }
};
