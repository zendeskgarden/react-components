import { Anchor } from '@zendeskgarden/react-buttons';
import README from '../README.md';

export default {
  title: 'Packages/Buttons/Anchor',
  component: Anchor
};

export const Anchor = {
  render: args => <Anchor href="#" {...args} />,

  args: {
    children: 'Text',
    isUnderlined: true
  },

  name: 'Anchor',

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1494%3A0'
    }
  }
};
