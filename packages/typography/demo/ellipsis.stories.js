import { Ellipsis } from '@zendeskgarden/react-typography';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Ellipsis',
  component: Ellipsis
};

export const Ellipsis = {
  render: args => <Ellipsis {...args} />,
  name: 'Ellipsis',

  args: {
    children: 'Veggies es bonus vobis, proinde vos postulo essum magis.',

    style: {
      width: 150
    }
  },

  argTypes: {
    tag: {
      control: 'text'
    }
  }
};
