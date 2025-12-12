import { UnorderedList } from '@zendeskgarden/react-typography';
import { UnorderedListStory } from './stories/UnorderedListStory';
import { LIST_ITEMS as ITEMS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Lists/UnorderedList',
  component: UnorderedList,

  subcomponents: {
    'UnorderedList.Item': UnorderedList.Item
  }
};

export const UnorderedList = {
  render: args => <UnorderedListStory {...args} />,
  name: 'UnorderedList',

  args: {
    items: ITEMS
  },

  argTypes: {
    items: {
      name: 'UnorderedList.Item[]',

      table: {
        category: 'Story'
      }
    }
  }
};
