import { XL } from '@zendeskgarden/react-typography';
import { TypescaleStory } from './stories/TypescaleStory';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Typescale/XL',
  component: XL
};

export const Xl = {
  render: args => <TypescaleStory {...args} size="extra-large" />,
  name: 'XL',

  args: {
    children: 'Text'
  },

  argTypes: {
    tag: {
      control: 'text'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A107'
    }
  }
};
