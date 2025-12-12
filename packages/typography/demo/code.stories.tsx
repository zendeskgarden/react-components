import { Anchor } from '@zendeskgarden/react-buttons';
import { Code } from '@zendeskgarden/react-typography';
import README from '../README.md';

export default {
  title: 'Packages/Typography/Code',
  component: Code
};

export const Code = {
  render: args =>
    args.isAnchor ? (
      <Anchor isUnderlined={false}>
        <Code {...args} />
      </Anchor>
    ) : (
      <Code {...args} />
    ),

  name: 'Code',

  args: {
    children: 'Text'
  },

  argTypes: {
    isAnchor: {
      control: 'boolean',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39295'
    }
  }
};
