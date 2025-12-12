import { Progress } from '@zendeskgarden/react-loaders';
import README from '../README.md';

export default {
  title: 'Packages/Loaders/Progress',
  component: Progress
};

export const Progress = {
  render: args => <Progress {...args} />,
  name: 'Progress',

  argTypes: {
    color: {
      control: 'color'
    },

    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
  },

  args: {
    'aria-label': 'Label',
    value: 0
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A144'
    }
  }
};
