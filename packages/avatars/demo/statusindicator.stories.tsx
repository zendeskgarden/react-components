import { StatusIndicator } from '@zendeskgarden/react-avatars';
import README from '../README.md';

import { StatusIndicatorStory } from './stories/StatusIndicatorStory';

export default {
  title: 'Packages/Avatars/StatusIndicator',
  component: StatusIndicator
};

export const StatusIndicator = {
  render: args => <StatusIndicatorStory {...args} />,
  name: 'StatusIndicator',

  argTypes: {
    children: {
      control: 'text'
    }
  },

  args: {
    'aria-label': 'Label',
    children: 'Status'
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=10927%3A45275'
    }
  }
};
