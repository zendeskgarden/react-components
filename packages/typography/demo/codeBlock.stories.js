import { CodeBlock } from '@zendeskgarden/react-typography';
import { CODE_BLOCK_CHILDREN as CODE } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Typography/CodeBlock',
  component: CodeBlock
};

export const CodeBlock = {
  render: ({ code, ...args }) => <CodeBlock {...args} children={code[args.language || 'tsx']} />,

  name: 'CodeBlock',

  args: {
    code: CODE,

    containerProps: {
      style: {
        maxHeight: 'calc(100vh - 80px)'
      }
    }
  },

  argTypes: {
    code: {
      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=6739%3A41717'
    }
  }
};
