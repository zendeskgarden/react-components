/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock } from '@zendeskgarden/react-typography';
import { CODE_BLOCK_CHILDREN as CODE } from './stories/data';

export default {
  title: 'Packages/Typography/CodeBlock',
  component: CodeBlock
};

export const Default = {
  render: ({ code, ...args }: any) => (
    <CodeBlock {...args}>{code[args.language || 'tsx']}</CodeBlock>
  ),

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
