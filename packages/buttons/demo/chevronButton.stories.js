import { useArgs } from '@storybook/client-api';
import { ChevronButton } from '@zendeskgarden/react-buttons';
import README from '../README.md';

export default {
  title: 'Packages/Buttons/ChevronButton',
  component: ChevronButton
};

export const ChevronButton = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleClick = () =>
      updateArgs({
        isRotated: args.isRotated ? false : true
      });

    return <ChevronButton {...args} onClick={handleClick} />;
  },

  name: 'ChevronButton',

  args: {
    'aria-label': 'Label'
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};
