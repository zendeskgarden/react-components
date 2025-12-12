import { Tooltip } from '@zendeskgarden/react-tooltips';
import { MenuStory } from './stories/MenuStory';

export default {
  title: 'Packages/Tooltips/[patterns]',
  component: Tooltip
};

export const Menu = {
  render: args => <MenuStory {...args} />,
  name: 'Menu',

  parameters: {
    controls: {
      include: ['appendToNode', 'placement']
    }
  },

  args: {
    appendToNode: false,
    placement: 'bottom'
  },

  argTypes: {
    appendToNode: {
      control: 'boolean'
    }
  }
};
