import { OrderedList } from '@zendeskgarden/react-typography';
import { OrderedListStory } from './stories/OrderedListStory';
import { LIST_ITEMS as ITEMS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Lists/OrderedList',
  component: OrderedList,

  subcomponents: {
    'OrderedList.Item': OrderedList.Item
  }
};

export const OrderedList = {
  render: args => <OrderedListStory {...args} />,
  name: 'OrderedList',

  args: {
    items: ITEMS
  },

  argTypes: {
    items: {
      name: 'OrderedList.Item[]',

      table: {
        category: 'Story'
      }
    }
  }
};
