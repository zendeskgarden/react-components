import { Paragraph } from '@zendeskgarden/react-typography';
import { ParagraphStory } from './stories/ParagraphStory';
import { PARAGRAPH_CHILDREN as CHILDREN } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Paragraph',
  component: Paragraph
};

export const Paragraph = {
  render: args => <ParagraphStory {...args} />,
  name: 'Paragraph',

  args: {
    children: CHILDREN
  }
};
