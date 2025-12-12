import Icon from '@zendeskgarden/svg-icons/src/16/smiley-stroke.svg';
import { IconButton } from '@zendeskgarden/react-buttons';
import README from '../README.md';

export default {
  title: 'Packages/Buttons/IconButton',
  component: IconButton
};

export const IconButton = {
  render: args => (
    <IconButton {...args}>
      <Icon />
    </IconButton>
  ),

  name: 'IconButton',

  args: {
    'aria-label': 'Label',
    isBasic: true,
    isPill: true
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1494%3A11'
    }
  }
};
