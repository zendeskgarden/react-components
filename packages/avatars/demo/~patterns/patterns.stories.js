import { Avatar } from '@zendeskgarden/react-avatars';
import { MenuStory } from './stories/MenuStory';
import { ChromeStory } from './stories/ChromeStory';
import { StatusMenuStory } from './stories/StatusMenuStory';

export default {
  title: 'Packages/Avatars/[patterns]',
  component: Avatar
};

export const Chrome = {
  render: args => <ChromeStory {...args} badge={args.badge ? 1 : undefined} />,
  name: 'Chrome',

  parameters: {
    controls: {
      include: ['badge', 'status']
    }
  },

  argTypes: {
    badge: {
      control: 'boolean'
    }
  }
};

export const Menu = {
  render: args => <MenuStory {...args} />,
  name: 'Menu',

  parameters: {
    controls: {
      include: ['isCompact']
    }
  },

  args: {
    isCompact: false
  },

  argTypes: {
    isCompact: {
      control: 'boolean'
    }
  }
};

export const StatusMenu = {
  render: args => <StatusMenuStory {...args} />,
  name: 'StatusMenu',

  parameters: {
    controls: {
      include: ['isCompact']
    }
  },

  args: {
    isCompact: false,
    type: 'available'
  },

  argTypes: {
    isCompact: {
      control: 'boolean'
    }
  }
};
