import { Blockquote } from '@zendeskgarden/react-typography';
import { BlockquoteStory } from './stories/BlockquoteStory';
import { BLOCKQUOTE_CHILDREN as CHILDREN } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Blockquote',
  component: Blockquote
};

export const Blockquote = {
  render: args => <BlockquoteStory {...args} />,
  name: 'Blockquote',

  args: {
    children: CHILDREN
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39345'
    }
  }
};
