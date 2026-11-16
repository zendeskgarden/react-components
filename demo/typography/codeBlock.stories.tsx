/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { CodeBlock } from '../../src/index';
import { CODE_BLOCK_CHILDREN as CODE } from './stories/data';

export default {
  title: 'Components/Typography/CodeBlock',
  component: CodeBlock
};

export const Example = {
  render: ({ code, ...args }: any) => (
    <CodeBlock {...args}>{code[args.language || 'tsx']}</CodeBlock>
  ),
  name: 'CodeBlock',
  args: {
    code: CODE,
    containerProps: { style: { maxHeight: 'calc(100vh - 80px)' } }
  },
  argTypes: { code: { table: { category: 'Story' } } }
};
