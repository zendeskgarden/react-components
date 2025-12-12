import { Kbd } from '@zendeskgarden/react-typography';
import { KbdStory } from './stories/KbdStory';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Kbd',
  component: Kbd
};

export const Kbd = {
  render: args => <KbdStory {...args} />,
  name: 'Kbd',

  args: {
    children: '⇧ ⌃ ⌥ /',
    size: 'inherit'
  }
};
