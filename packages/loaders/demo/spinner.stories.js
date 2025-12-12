import { Spinner } from '@zendeskgarden/react-loaders';
import README from '../README.md';

export default {
  title: 'Packages/Loaders/Spinner',
  component: Spinner
};

export const Spinner = {
  render: args => <Spinner {...args} />,
  name: 'Spinner',

  argTypes: {
    color: {
      control: 'color'
    },

    size: {
      control: 'text'
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
