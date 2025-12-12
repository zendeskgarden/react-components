import { CardStory } from './stories/CardStory';
import { COLUMNS } from './stories/data';

export default {
  title: 'Packages/Grid/[patterns]'
};

export const PaneCardLayout = {
  render: args => <CardStory {...args} />,
  name: 'Pane Card Layout',

  args: {
    columns: COLUMNS
  },

  argTypes: {
    columns: {
      name: 'columns',

      table: {
        category: 'Story'
      }
    }
  }
};
