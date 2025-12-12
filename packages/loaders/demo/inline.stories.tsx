import { Inline } from '@zendeskgarden/react-loaders';
import README from '../README.md';

export default {
  title: 'Packages/Loaders/Inline',
  component: Inline
};

export const Inline = {
  render: args => <Inline {...args} />,
  name: 'Inline',

  argTypes: {
    color: {
      control: 'color'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A188'
    }
  }
};
