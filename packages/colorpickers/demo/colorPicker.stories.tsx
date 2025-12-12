import { useArgs } from '@storybook/client-api';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ColorPicker } from '@zendeskgarden/react-colorpickers';
import README from '../README.md';

export default {
  title: 'Packages/Colorpickers/ColorPicker',
  component: ColorPicker,

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=2178%3A344'
    }
  }
};

export const Uncontrolled = {
  render: args => <ColorPicker {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    color: {
      control: false
    }
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = color =>
      updateArgs({
        color
      });

    return <ColorPicker {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    color: PALETTE.blue[600]
  },

  argTypes: {
    defaultColor: {
      control: false
    }
  }
};
